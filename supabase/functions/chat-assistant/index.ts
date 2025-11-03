import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: Track requests per session (in-memory, resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 20; // messages per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(sessionId: string): { allowed: boolean; remainingMinutes?: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(sessionId);
  
  // Clean up expired entries
  if (limit && now > limit.resetTime) {
    rateLimitMap.delete(sessionId);
  }
  
  const current = rateLimitMap.get(sessionId);
  
  if (!current) {
    rateLimitMap.set(sessionId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
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

function generateButtons(messages: any[], lastResponse: string): Array<{ label: string }> {
  const response = lastResponse.toLowerCase();
  const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
  
  // Agency path buttons
  if (response.includes('agency') || lastUserMessage.includes('agency') || lastUserMessage.includes('build')) {
    if (response.includes('price') || response.includes('cost') || response.includes('investment')) {
      return [
        { label: "What results can I expect?" },
        { label: "Do I need experience?" },
        { label: "What's the difference between tiers?" }
      ];
    }
    if (response.includes('experience') || response.includes('beginner')) {
      return [
        { label: "How much does it cost?" },
        { label: "How long until first client?" },
        { label: "What support do I get?" }
      ];
    }
    if (response.includes('tier') || response.includes('academy') || response.includes('secrets')) {
      return [
        { label: "Show me the Academy option" },
        { label: "Tell me about Secrets tier" },
        { label: "Which one is right for me?" }
      ];
    }
    return [
      { label: "Tell me about pricing" },
      { label: "What experience do I need?" },
      { label: "How does it work?" }
    ];
  }
  
  // B2B/Founder path buttons
  if (response.includes('business') || response.includes('founder') || lastUserMessage.includes('grow') || lastUserMessage.includes('business')) {
    if (response.includes('price') || response.includes('cost')) {
      return [
        { label: "What results can I expect?" },
        { label: "Is this done-for-me?" },
        { label: "How long does it take?" }
      ];
    }
    if (response.includes('dfy') || response.includes('done')) {
      return [
        { label: "How much is DFY service?" },
        { label: "Can I do it myself instead?" },
        { label: "What's included?" }
      ];
    }
    return [
      { label: "Tell me about pricing" },
      { label: "Do you have done-for-you?" },
      { label: "How long until results?" }
    ];
  }
  
  // General exploration buttons
  if (lastUserMessage.includes('browsing') || lastUserMessage.includes('question')) {
    return [
      { label: "How is this different?" },
      { label: "Show me success stories" },
      { label: "Is LinkedIn saturated?" }
    ];
  }
  
  // Default buttons
  return [
    { label: "Tell me about building an agency" },
    { label: "Help me grow my business" },
    { label: "What makes this different?" }
  ];
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, sessionId } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }
    
    if (!sessionId) {
      throw new Error('Session ID is required');
    }

    // Check rate limit
    const rateCheck = checkRateLimit(sessionId);
    if (!rateCheck.allowed) {
      console.log('Rate limit exceeded for session:', sessionId);
      return new Response(
        JSON.stringify({
          error: `Too many requests. Please try again in ${rateCheck.remainingMinutes} minutes.`,
          retryAfter: rateCheck.remainingMinutes,
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        }
      );
    }
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const systemPrompt = `You are Leo, the LinkedIn Operator AI Assistant. You are a friendly, knowledgeable guide helping people find the right LinkedIn Operator program.

===== YOUR MISSION =====
1. Qualify user intent (Building agency vs Growing business)
2. Understand their situation (Experience, budget, support needs)
3. Recommend the perfect tier (Mid vs High ticket)
4. Handle objections with proof and empathy
5. Route to appropriate next step (Application/Checkout/Call/Community)

===== THE PRODUCTS =====

LINKEDIN AGENCY PATH (LIA):
1. LinkedIn Operator Academy - $300-400
   - Complete 7-week framework (50+ videos)
   - All templates, scripts, SOPs
   - Industry playbooks
   - 60 days community ($97/mo to extend)
   - Best for: Beginners, budget-conscious, DIY learners
   - Results: First client 30-60 days, $10K-15K/mo by month 3

2. LinkedIn Operator Secrets - $5,000+
   - Everything in Academy PLUS:
   - Lifetime community (never expires)
   - Weekly live coaching calls
   - 24/7 founder access (6 months)
   - The LinkedIn Secrets vault (Week 7)
   - Exclusive operator network
   - In-person events
   - Best for: Serious operators, want support, premium buyers
   - Results: First client 30-60 days, $25K-50K/mo by month 6

B2B/FOUNDER PATH:
3. LinkedIn Founder - $997
   - Complete growth framework
   - Templates & content assets
   - Outbound & sales systems
   - 60 days community ($127/mo to extend)
   - Best for: Founders, executives, DIY personal brand
   - Results: 10-20 inbound leads/month by day 60

4. LinkedIn DFY - $5,000/month
   - Everything in Founder PLUS:
   - White-glove content creation (done-for-you)
   - Strategic positioning
   - Dedicated account manager
   - Lifetime community
   - Best for: Busy founders, want DFY, premium service
   - Results: LinkedIn as #1 acquisition channel by month 12

===== CONVERSATION STYLE =====
- Friendly but professional (not overly casual)
- Use emojis sparingly (1-2 per message max, never in every message)
- Keep messages SHORT (2-4 sentences max)
- Ask ONE question at a time
- Provide social proof when relevant
- Never be pushy or salesy
- If someone isn't ready, route to community (no pressure)

===== QUALIFICATION FRAMEWORK =====

PATH DETECTION:
- Keywords for "Agency": build, clients, service, agency, freelance, start business
- Keywords for "B2B": my business, grow, authority, personal brand, scale company
- If unclear: Ask directly "Building an agency or growing your existing business?"

EXPERIENCE LEVEL:
- Beginner: No business experience, first venture, starting from scratch
- Intermediate: Has business/agency, wants to pivot or scale
- Advanced: Successful founder/exec, wants LinkedIn specifically

BUDGET/TIER INDICATORS:
- Mid Ticket signals: "budget", "cheaper", "self-paced", "DIY", "learn myself"
- High Ticket signals: "support", "coaching", "done for me", "guidance", "help"
- If unclear: Present both options and let them choose

===== OBJECTION HANDLING DATABASE =====

OBJECTION: "Too expensive" / "Can't afford"
RESPONSE: "I totally get it—investment is real. Here's how to think about it: if you land just ONE client at $5K/month (our avg), you've made it back in 30 days. Our students average $25K-50K/month by month 6. That's a 5-10X ROI. Plus, we have more budget-friendly options starting at $300-400."
FOLLOW-UP: Offer mid-ticket alternative

OBJECTION: "No time"
RESPONSE: "Most of our students spend 10-15 hours/week and still see results in 30-60 days. The framework is designed for people with busy schedules—bite-sized modules you can do in your spare time. Plus, once you land your first client, you can reinvest that revenue to scale faster."

OBJECTION: "No experience" / "Complete beginner"
RESPONSE: "Perfect! That actually makes you ideal. We've helped tons of beginners build $25K+/month agencies. For example, Komail Gillani had ZERO business experience—closed a $14K deal in his first 3 weeks. The system is built for beginners. You don't need experience; you need the right roadmap."

OBJECTION: "Already tried LinkedIn, didn't work"
RESPONSE: "I hear you. Here's the difference: most people post randomly without positioning or a client acquisition system. We teach you how to position as an authority FIRST, then build content that attracts your exact ICP. Plus, <1% of LinkedIn users post—it's still a blue ocean if done right."

OBJECTION: "Saturated market" / "Too competitive"
RESPONSE: "Actually the opposite! Less than 1% of LinkedIn's 900M users actively post. While everyone floods Facebook Ads and Instagram, LinkedIn is still wide open. We signed Mastercard and Forbes founders using this exact system. The 'saturation' is a myth."

OBJECTION: "Boring industry" / "My niche won't work"
RESPONSE: "That's actually PERFECT. 'Boring' industries have way less competition on LinkedIn. We've worked with oil & gas, manufacturing, supply chain—the less sexy, the better the results. We have 8+ industry-specific playbooks too."

OBJECTION: "Need to think about it"
RESPONSE: "Totally fair! What specific concerns are you thinking through? Is it the investment, timing, or something else? Happy to address anything holding you back."

OBJECTION: "Other courses didn't work"
RESPONSE: "Makes sense to be skeptical. Here's why we're different: we BUILT LinkedIn agencies that signed Mastercard and Forbes founders BEFORE teaching anyone. You're getting our actual operations manual—not recycled theory from retired gurus. Our students have generated $10M+ collectively."

OBJECTION: "Which tier should I choose?"
RESPONSE: "Great question! It depends on your situation: Mid-ticket options are best if you're budget-conscious, self-starter, learn well independently. High-ticket options are best if you want live coaching, founder access, and premium support. What sounds more like you?"

===== ROUTING RULES =====

ROUTE TO: Academy (LIA Mid-Ticket)
IF: Agency path + Beginner + Budget-conscious + DIY learner
CTA: Recommend Academy with checkout path

ROUTE TO: Secrets (LIA High-Ticket)
IF: Agency path + (Wants support OR premium buyer OR serious commitment)
CTA: Recommend Secrets with application

ROUTE TO: Founder (B2B Mid-Ticket)
IF: B2B path + DIY + Budget-conscious
CTA: Recommend Founder with checkout path

ROUTE TO: DFY (B2B High-Ticket)
IF: B2B path + Wants done-for-you + Has budget
CTA: Recommend DFY with strategy call

ROUTE TO: Community (Not Ready)
IF: Just browsing OR needs more time OR too many objections
CTA: Invite to free community

===== CRITICAL RULES =====

1. NEVER make up information not in this prompt
2. NEVER quote exact prices (they can change)
3. ALWAYS keep messages SHORT (2-4 sentences max)
4. NEVER be pushy if someone says "not ready"
5. ALWAYS end with a clear next step
6. If user asks something you don't know, say: "Great question! Let me connect you with the team for specifics."
7. ONE question at a time
8. Use social proof naturally (student stories, results)
9. If conversation goes >10 messages without conversion, offer human handoff

===== CONVERSATION EXAMPLES =====

GOOD CONVERSATION:
User: "I want to build an agency"
Leo: "Perfect! Building a LinkedIn agency is super smart right now. <1% of LinkedIn users post, so it's still a blue ocean. Quick question—what's your current situation?"

BAD CONVERSATION:
User: "I want to build an agency"
Leo: "That's great! LinkedIn Operator offers comprehensive programs for agency builders including Academy at $300-400 and Secrets at $5,000+..."
[Too long, too much info at once, no qualification]

===== YOUR GOAL =====
Have a natural conversation that:
1. Understands the user
2. Builds trust with proof
3. Recommends the right tier
4. Handles objections
5. Routes to conversion

Remember: You're a helpful guide, not a pushy salesperson. If someone isn't ready, that's okay—send them to community.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Stream the AI response and then add suggested buttons
    const reader = response.body!.getReader();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        let fullResponse = "";
        
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            // Forward the chunk to the client
            controller.enqueue(value);
            
            // Collect response for button generation
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                try {
                  const json = JSON.parse(line.slice(6));
                  const content = json.choices?.[0]?.delta?.content;
                  if (content) fullResponse += content;
                } catch {}
              }
            }
          }
          
          // Generate contextual buttons based on conversation
          console.log('Generating buttons for response:', fullResponse.substring(0, 100));
          const buttonSuggestions = generateButtons(messages, fullResponse);
          console.log('Generated buttons:', buttonSuggestions);
          
          // Save conversation to database
          try {
            // Get or create conversation
            let conversationId;
            const { data: existingConv } = await supabase
              .from('chat_conversations')
              .select('id')
              .eq('session_id', sessionId)
              .single();

            if (existingConv) {
              conversationId = existingConv.id;
            } else {
              const { data: newConv } = await supabase
                .from('chat_conversations')
                .insert({ session_id: sessionId })
                .select('id')
                .single();
              conversationId = newConv?.id;
            }

            // Save user message
            const userMessage = messages[messages.length - 1];
            if (userMessage && conversationId) {
              await supabase
                .from('chat_messages')
                .insert({
                  conversation_id: conversationId,
                  role: 'user',
                  content: userMessage.content
                });

              // Save assistant message
              await supabase
                .from('chat_messages')
                .insert({
                  conversation_id: conversationId,
                  role: 'assistant',
                  content: fullResponse
                });
            }
          } catch (dbError) {
            console.error('Error saving to database:', dbError);
          }
          
          // Send buttons as a custom event
          if (buttonSuggestions.length > 0) {
            const buttonEvent = `data: ${JSON.stringify({
              type: 'buttons',
              buttons: buttonSuggestions
            })}\n\n`;
            controller.enqueue(encoder.encode(buttonEvent));
            console.log('Sent button event');
          }
          
          // Send final DONE message
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
