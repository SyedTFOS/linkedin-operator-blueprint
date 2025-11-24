-- Create checkout_submissions table
CREATE TABLE public.checkout_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.checkout_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public checkout form)
CREATE POLICY "Anyone can submit checkout form"
  ON public.checkout_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy for admins to view all submissions
CREATE POLICY "Admins can view all submissions"
  ON public.checkout_submissions
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_checkout_submissions_updated_at
  BEFORE UPDATE ON public.checkout_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index on email for faster lookups
CREATE INDEX idx_checkout_submissions_email ON public.checkout_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX idx_checkout_submissions_created_at ON public.checkout_submissions(created_at DESC);