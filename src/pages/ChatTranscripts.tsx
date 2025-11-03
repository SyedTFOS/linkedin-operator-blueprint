import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, MessageSquare, Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface Conversation {
  id: string;
  session_id: string;
  started_at: string;
  last_message_at: string;
  message_count: number;
}

interface Message {
  id: string;
  role: string;
  content: string;
  created_at: string;
}

const ChatTranscripts = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  const fetchConversations = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('chat_conversations')
      .select('*')
      .order('last_message_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
    } else {
      setConversations(data || []);
    }
    setIsLoading(false);
  };

  const fetchMessages = async (conversationId: string) => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
    } else {
      setMessages(data || []);
    }
  };

  const filteredConversations = conversations.filter(conv => 
    conv.session_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">LEO Chat Transcripts</h1>
            <p className="text-muted-foreground">View and search all chatbot conversations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="p-4 md:col-span-1">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <ScrollArea className="h-[calc(100vh-250px)]">
                {isLoading ? (
                  <div className="text-center py-8 text-muted-foreground">Loading...</div>
                ) : filteredConversations.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No conversations found
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredConversations.map((conv) => (
                      <Card
                        key={conv.id}
                        className={`p-4 cursor-pointer transition-colors hover:bg-accent ${
                          selectedConversation?.id === conv.id ? 'bg-accent' : ''
                        }`}
                        onClick={() => setSelectedConversation(conv)}
                      >
                        <div className="flex items-start gap-3">
                          <MessageSquare className="h-5 w-5 text-primary mt-1" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              Session {conv.session_id.substring(8, 20)}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <Calendar className="h-3 w-3" />
                              {format(new Date(conv.last_message_at), 'MMM d, HH:mm')}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {conv.message_count} messages
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </div>
          </Card>

          {/* Messages View */}
          <Card className="p-6 md:col-span-2">
            {selectedConversation ? (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-semibold">Conversation Details</h2>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Session: {selectedConversation.session_id}</span>
                    <span>•</span>
                    <span>Started: {format(new Date(selectedConversation.started_at), 'MMM d, yyyy HH:mm')}</span>
                  </div>
                </div>

                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            msg.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <div className="text-xs opacity-70 mb-1">
                            {msg.role === 'user' ? 'User' : 'LEO'} • {format(new Date(msg.created_at), 'HH:mm:ss')}
                          </div>
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[calc(100vh-300px)] text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a conversation to view messages</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatTranscripts;
