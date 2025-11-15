import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: Track submissions per IP (in-memory, resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // submissions per hour per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): { allowed: boolean; remainingMinutes?: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  // Clean up expired entries
  if (limit && now > limit.resetTime) {
    rateLimitMap.delete(ip);
  }
  
  const current = rateLimitMap.get(ip);
  
  if (!current) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  
  if (current.count >= RATE_LIMIT_MAX) {
    const remainingMs = current.resetTime - now;
    const remainingMinutes = Math.ceil(remainingMs / 60000);
    return { allowed: false, remainingMinutes };
  }
  
  current.count++;
  return { allowed: true };
}

// Input validation schema
const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(50),
  currentSituation: z.string().trim().min(1, "Current situation is required").max(1000),
  currentRevenue: z.string().trim().min(1, "Current revenue is required").max(50),
  revenueGoal: z.string().trim().min(1, "Revenue goal is required").max(1000),
  linkedinUrl: z.string().trim().max(500).optional(),
  biggestChallenges: z.string().trim().min(1, "Biggest challenges is required").max(2000),
  whyJoin: z.string().trim().min(1, "Why join is required").max(2000),
  investmentReady: z.boolean(),
  commitmentReady: z.boolean(),
});

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      console.log('Rate limit exceeded for IP:', ip);
      return new Response(
        JSON.stringify({
          error: `Too many applications submitted. Please try again in ${rateCheck.remainingMinutes} minutes.`,
          retryAfter: rateCheck.remainingMinutes,
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        }
      );
    }

    const body = await req.json();
    
    // Validate input
    let validatedData;
    try {
      validatedData = applicationSchema.parse(body);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        return new Response(
          JSON.stringify({
            error: 'Invalid input',
            details: error.errors[0].message
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
          }
        );
      }
      throw error;
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase credentials not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert into database
    const { error } = await supabase
      .from("secrets_applications")
      .insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        current_situation: validatedData.currentSituation,
        current_revenue: validatedData.currentRevenue,
        revenue_goal: validatedData.revenueGoal,
        linkedin_url: validatedData.linkedinUrl || null,
        biggest_challenges: validatedData.biggestChallenges,
        why_join: validatedData.whyJoin,
        investment_ready: validatedData.investmentReady,
        commitment_ready: validatedData.commitmentReady,
      });

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    console.log('Application submitted successfully for:', validatedData.email);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Application submitted successfully! We'll review and respond within 24 hours."
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in submit-application function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to submit application. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});