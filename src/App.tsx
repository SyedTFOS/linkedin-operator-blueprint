import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgencyTiers from "./pages/AgencyTiers";
import BusinessTiers from "./pages/BusinessTiers";
import DoneForYou from "./pages/DoneForYou";
import Founder from "./pages/Founder";
import Academy from "./pages/Academy";
import Secrets from "./pages/Secrets";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agency" element={<AgencyTiers />} />
          <Route path="/business" element={<BusinessTiers />} />
          <Route path="/business/done-for-you" element={<DoneForYou />} />
          <Route path="/business/founder" element={<Founder />} />
          <Route path="/agency/academy" element={<Academy />} />
          <Route path="/agency/secrets" element={<Secrets />} />
          <Route path="/agency/secrets/book" element={<Book />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
