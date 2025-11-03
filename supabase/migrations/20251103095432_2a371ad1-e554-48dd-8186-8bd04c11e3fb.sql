-- Fix RLS policies for chat tables
-- This migration improves security for the public chatbot by:
-- 1. Making session_id required to prevent orphaned conversations
-- 2. Removing UPDATE policies that allow unauthorized modifications
-- 3. Adding indexes for better performance

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can update conversations" ON public.chat_conversations;

-- Make session_id non-nullable to ensure all conversations are trackable
ALTER TABLE public.chat_conversations 
  ALTER COLUMN session_id SET NOT NULL;

-- Add index on session_id for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_conversations_session_id 
  ON public.chat_conversations(session_id);

-- Add index on conversation_id for messages lookup
CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation_id 
  ON public.chat_messages(conversation_id);

-- Note: Keeping SELECT and INSERT policies as 'true' because this is a public 
-- anonymous chatbot. The edge function manages access control through session management.
-- The key security improvement is removing UPDATE capability from clients.