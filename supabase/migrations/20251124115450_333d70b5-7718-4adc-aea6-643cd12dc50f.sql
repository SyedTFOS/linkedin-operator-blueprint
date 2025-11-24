-- Add whatsapp column to secrets_applications table
ALTER TABLE public.secrets_applications
ADD COLUMN whatsapp TEXT NOT NULL DEFAULT '';