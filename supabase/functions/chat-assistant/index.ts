import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an intelligent sales assistant for LinkedIn Operator, helping users find the right path.

YOUR GOAL: Qualify leads within 2-3 messages and route them to the right solution.

PATHS TO RECOMMEND:
1. Agency Builders - Want to start/scale a LinkedIn agency
2. Business Owners - Want to grow their own business using LinkedIn

QUALIFICATION QUESTIONS (Ask naturally in conversation):
- What's their primary goal? (Building agency vs. growing business)
- What's their experience level? (Beginner, intermediate, expert)
- What's their budget range? (Mid-ticket vs. high-ticket)

ROUTING OPTIONS:
- Application Form: For qualified high-ticket leads
- Checkout Link: For mid-ticket ready buyers
- Book a Call: For those needing more info
- Community Access: For those wanting to learn more first

FAQ TOPICS YOU SHOULD ANSWER:
- Program details and what's included
- Pricing and payment options
- Success stories and results
- Time commitment required
- Support and community access

CONVERSATION STYLE:
- Be conversational and helpful, not salesy
- Ask ONE question at a time
- Listen to their needs first
- Provide specific recommendations based on their answers
- Use emojis occasionally to keep it friendly 😊
- Always end with a clear next step or CTA

Remember: Your job is to help them find the RIGHT solution for THEIR needs, not push the most expensive option.`;

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

    return new Response(response.body, {
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
