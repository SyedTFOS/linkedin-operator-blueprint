import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Loader2, Building2, Briefcase, MessageSquare, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import AnimatedChatHeader from "@/components/AnimatedChatHeader";

type Message = {
  role: "user" | "assistant";
  content: string;
  buttons?: Array<{ label: string }>;
};

const EmbeddedChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
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
      let suggestedButtons: Array<{ label: string }> = [];

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
            
            // Check for custom button event
            if (parsed.type === 'buttons') {
              console.log('Received buttons:', parsed.buttons);
              suggestedButtons = parsed.buttons || [];
              continue;
            }
            
            // Regular content
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

      // Update final message with buttons
      if (suggestedButtons.length > 0) {
        console.log('Adding buttons to message:', suggestedButtons);
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: "assistant",
            content: assistantContent,
            buttons: suggestedButtons,
          };
          return newMessages;
        });
      } else {
        console.log('No buttons to add');
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
      <AnimatedChatHeader />
      <div className="bg-card rounded-2xl shadow-xl border border-border glow-effect overflow-hidden flex flex-col">
        {/* Input at Top - Only show when no messages */}
        {messages.length === 0 && (
          <div className="p-6 border-b border-border bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="flex gap-3 mb-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Leo is waiting..."
                disabled={isLoading}
                className="flex-1 h-14 text-base rounded-2xl border-2 border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 px-6 h-14 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>

            {/* Quick Reply Buttons */}
            {showQuickReplies && (
              <div className="space-y-3">
                <Button
                  onClick={() => handleQuickReply("I want to build an agency")}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-5 hover:bg-primary/5 hover:border-primary/50 gap-3 bg-background/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-200 hover:shadow-md"
                  disabled={isLoading}
                >
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">I want to build an agency</span>
                </Button>
                <Button
                  onClick={() => handleQuickReply("I want to grow my business")}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-5 hover:bg-primary/5 hover:border-primary/50 gap-3 bg-background/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-200 hover:shadow-md"
                  disabled={isLoading}
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="font-medium">I want to grow my business</span>
                </Button>
                <Button
                  onClick={() => handleQuickReply("I have a specific question")}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-5 hover:bg-primary/5 hover:border-primary/50 gap-3 bg-background/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-200 hover:shadow-md"
                  disabled={isLoading}
                >
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="font-medium">I have a specific question</span>
                </Button>
                <Button
                  onClick={() => handleQuickReply("Just browsing")}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4 px-5 hover:bg-primary/5 hover:border-primary/50 gap-3 bg-background/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-200 hover:shadow-md"
                  disabled={isLoading}
                >
                  <Eye className="h-5 w-5 text-primary" />
                  <span className="font-medium">Just browsing</span>
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Messages - Only show when there are messages */}
        {messages.length > 0 && (
          <ScrollArea className="h-[500px] p-6" ref={scrollRef}>
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div key={index} className="space-y-3">
                  {message.role === "assistant" ? (
                    <>
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                          🦁
                        </div>
                        <div className="flex-1 bg-white dark:bg-card border border-border rounded-2xl px-5 py-4 shadow-sm">
                          <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </div>
                      
                      {/* Show buttons only for the most recent assistant message */}
                      {message.buttons && index === messages.length - 1 && !isLoading && (
                        <div className="ml-14 space-y-2">
                          {message.buttons.map((button, btnIdx) => (
                            <Button
                              key={btnIdx}
                              onClick={() => handleQuickReply(button.label)}
                              variant="outline"
                              className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/5 hover:border-primary/50 gap-2 bg-background/80 backdrop-blur-sm rounded-xl border transition-all duration-200"
                              disabled={isLoading}
                            >
                              <span className="text-sm font-medium">{button.label}</span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex justify-end">
                      <div className="bg-[#FF6B35] text-white rounded-2xl px-5 py-3 shadow-lg max-w-[80%]">
                        <p className="text-base leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    🦁
                  </div>
                  <div className="text-sm text-muted-foreground italic">
                    Leo is typing...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        )}

        {/* Input at Bottom - Only show when there are messages */}
        {messages.length > 0 && (
          <div className="p-6 border-t border-border bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Leo is waiting..."
                disabled={isLoading}
                className="flex-1 h-14 text-base rounded-2xl border-2 border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/60"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 px-6 h-14 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmbeddedChatbot;
