import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  roman?: string;
  isSubItem?: boolean;
}

const navigationItems: NavItem[] = [
  { id: "about-linkedin-operator", label: "About LinkedIn Operator", isSubItem: false },
  { id: "discovery", label: "The Discovery", roman: "i.", isSubItem: true },
  { id: "proof", label: "The Proof", roman: "ii.", isSubItem: true },
  { id: "numbers", label: "The Numbers", roman: "iii.", isSubItem: true },
  { id: "comparison", label: "Comparison", roman: "iv.", isSubItem: true },
  { id: "experiment", label: "The Experiment", roman: "v.", isSubItem: true },
  { id: "about-programs", label: "About LinkedIn Operator Programs", isSubItem: false },
  { id: "whats-inside", label: "What's Inside", roman: "vi.", isSubItem: true },
  { id: "next-step", label: "Your Next Step", roman: "vii.", isSubItem: true },
  { id: "chat-leo", label: "Chat With Leo", isSubItem: false },
];

export function NavigationSidebar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(s => s.element);

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <aside className="hidden lg:block fixed left-4 top-24 h-[calc(100vh-8rem)] w-56 rounded-xl border border-border/50 bg-background/80 backdrop-blur-md shadow-lg z-40 overflow-hidden">
      <div className="flex flex-col h-full py-6 px-4">
        {/* Logo */}
        <div className="mb-6">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">Sections</h2>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left py-2 px-3 rounded-md transition-all duration-200 text-xs",
                    item.isSubItem && "pl-5",
                    !item.isSubItem && "font-semibold mt-3 first:mt-0 text-xs",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.roman && (
                    <span className="text-primary mr-1.5 text-[10px]">{item.roman}</span>
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
