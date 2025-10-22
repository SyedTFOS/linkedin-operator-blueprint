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
    <aside className="hidden lg:block fixed left-8 top-32 h-[calc(100vh-12rem)] w-64 z-40">
      <div className="flex h-full py-6">
        {/* Timeline line */}
        <div className="relative w-px bg-border/30 mr-6">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "absolute w-2 h-2 rounded-full -left-[3px] transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary scale-150"
                  : "bg-border/50"
              )}
              style={{
                top: `${(navigationItems.indexOf(item) / (navigationItems.length - 1)) * 100}%`
              }}
            />
          ))}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col justify-between overflow-y-auto">
          <ul className="flex flex-col justify-between h-full">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left transition-all duration-200 text-sm group",
                    item.isSubItem && "pl-4 text-xs",
                    !item.isSubItem && "font-semibold text-base",
                    activeSection === item.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.roman && (
                    <span className="text-primary/70 mr-2 text-xs font-normal">{item.roman}</span>
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
