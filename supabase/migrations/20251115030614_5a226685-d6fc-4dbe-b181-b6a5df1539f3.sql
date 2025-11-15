-- Create applications table for Secrets program
CREATE TABLE public.secrets_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_situation TEXT NOT NULL,
  current_revenue TEXT NOT NULL,
  revenue_goal TEXT NOT NULL,
  linkedin_url TEXT,
  biggest_challenges TEXT NOT NULL,
  why_join TEXT NOT NULL,
  investment_ready BOOLEAN NOT NULL,
  commitment_ready BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.secrets_applications ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (for public form submissions)
CREATE POLICY "Anyone can submit applications"
ON public.secrets_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view applications
CREATE POLICY "Admins can view all applications"
ON public.secrets_applications
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_secrets_applications_updated_at
BEFORE UPDATE ON public.secrets_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index on email for faster lookups
CREATE INDEX idx_secrets_applications_email ON public.secrets_applications(email);
CREATE INDEX idx_secrets_applications_created_at ON public.secrets_applications(created_at DESC);