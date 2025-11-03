import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CheckoutRequest {
  firstName: string;
  lastName: string;
  email: string;
  datafastVisitorId?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, datafastVisitorId }: CheckoutRequest = await req.json();

    console.log('Processing checkout for:', { email, firstName, lastName });
    console.log('DataFast Visitor ID:', datafastVisitorId);

    // Here you would integrate with your payment provider (dodopayments, Stripe, etc.)
    // For now, we'll log the information and return a success response
    
    // Example with dodopayments:
    // const payment = await dodopayments.payments.create({
    //   amount: 49700, // $497.00
    //   currency: 'USD',
    //   customer: {
    //     email: email,
    //     name: `${firstName} ${lastName}`,
    //   },
    //   metadata: {
    //     datafast_visitor_id: datafastVisitorId,
    //     product: 'LinkedIn Agency Academy',
    //   },
    // });

    // For DataFast conversion tracking
    if (datafastVisitorId) {
      console.log('Tracking conversion for visitor:', datafastVisitorId);
      
      // Send conversion event to DataFast
      const datafastApiKey = Deno.env.get('DATAFAST_API_KEY');
      
      if (!datafastApiKey) {
        console.error('DATAFAST_API_KEY not configured');
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Payment tracking configuration error',
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500,
          }
        );
      }
      
      try {
        const conversionResponse = await fetch('https://datafa.st/api/conversion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${datafastApiKey}`,
          },
          body: JSON.stringify({
            visitor_id: datafastVisitorId,
            event: 'purchase',
            value: 497,
            currency: 'USD',
            metadata: {
              product: 'LinkedIn Agency Academy',
              customer_email: email,
              customer_name: `${firstName} ${lastName}`,
            },
          }),
        });

        if (!conversionResponse.ok) {
          console.error('DataFast conversion tracking failed:', await conversionResponse.text());
        } else {
          console.log('DataFast conversion tracked successfully');
        }
      } catch (error) {
        console.error('Error tracking DataFast conversion:', error);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Checkout processed successfully',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing checkout:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
