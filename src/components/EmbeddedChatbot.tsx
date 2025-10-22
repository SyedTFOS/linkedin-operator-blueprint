import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Loader2, Building2, Briefcase, MessageSquare, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const EmbeddedChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey there! I'm here to help you find the perfect path at LinkedIn Operator.\n\n**What brings you here today?**",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-assistant`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = async (userMessage: Message) => {
    const allMessages = [...messages, userMessage];
    
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (resp.status === 429) {
        toast({
          title: "Rate limit exceeded",
          description: "Please wait a moment before sending another message.",
          variant: "destructive",
        });
        return;
      }

      if (resp.status === 402) {
        toast({
          title: "Service temporarily unavailable",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      if (!resp.ok || !resp.body) throw new Error("Failed to start stream");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowQuickReplies(false);

    await streamChat(userMessage);
  };

  const handleQuickReply = async (text: string) => {
    if (isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setShowQuickReplies(false);

    await streamChat(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="bg-card rounded-2xl shadow-xl border border-border glow-effect overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-2xl">
            🦁
          </div>
          <div>
            <h3 className="font-bold text-xl text-foreground">Talk To Leo</h3>
            <p className="text-sm text-muted-foreground">LinkedIn Operator's AI Agent • Here to help 24/7</p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="h-[500px] p-6" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-base font-semibold">{part}</strong> : part
                    )}</p>
                  </div>
                </div>
                
                {/* Quick Reply Buttons - Show only after first assistant message */}
                {index === 0 && message.role === "assistant" && showQuickReplies && (
                  <div className="mt-4 space-y-2">
                    <Button
                      onClick={() => handleQuickReply("I want to build an agency")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/10 hover:border-primary gap-2"
                      disabled={isLoading}
                    >
                      <Building2 className="h-4 w-4" />
                      I want to build an agency
                    </Button>
                    <Button
                      onClick={() => handleQuickReply("I want to grow my business")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/10 hover:border-primary gap-2"
                      disabled={isLoading}
                    >
                      <Briefcase className="h-4 w-4" />
                      I want to grow my business
                    </Button>
                    <Button
                      onClick={() => handleQuickReply("I have a specific question")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/10 hover:border-primary gap-2"
                      disabled={isLoading}
                    >
                      <MessageSquare className="h-4 w-4" />
                      I have a specific question
                    </Button>
                    <Button
                      onClick={() => handleQuickReply("Just browsing")}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/10 hover:border-primary gap-2"
                      disabled={isLoading}
                    >
                      <Eye className="h-4 w-4" />
                      Just browsing
                    </Button>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-5 py-3">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-6 border-t border-border bg-muted/20">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              disabled={isLoading}
              className="flex-1 h-12 text-base"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="lg"
              className="bg-primary hover:bg-primary/90 px-6"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedChatbot;
