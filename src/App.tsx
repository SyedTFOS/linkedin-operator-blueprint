import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import AgencyTiers from "./pages/AgencyTiers";
import BusinessTiers from "./pages/BusinessTiers";
import DoneForYou from "./pages/DoneForYou";
import Founder from "./pages/Founder";
import Academy from "./pages/Academy";
import Secrets from "./pages/Secrets";
import Book from "./pages/Book";
import Checkout from "./pages/Checkout";
import ChatTranscripts from "./pages/ChatTranscripts";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agency" element={<AgencyTiers />} />
          <Route path="/business" element={<BusinessTiers />} />
          <Route path="/business/done-for-you" element={<DoneForYou />} />
          <Route path="/business/founder" element={<Founder />} />
          <Route path="/agency/academy" element={<Academy />} />
          <Route path="/agency/academy/checkout" element={<Checkout />} />
          <Route path="/agency/secrets" element={<Secrets />} />
          <Route path="/agency/secrets/book" element={<Book />} />
          <Route path="/chat-transcripts" element={<ChatTranscripts />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
