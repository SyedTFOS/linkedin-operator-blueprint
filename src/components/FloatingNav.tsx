import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  section?: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
    section: "hero"
  },
  {
    name: "Our Mission",
    link: "#discovery",
    section: "discovery"
  },
  {
    name: "Programs",
    link: "#about-programs",
    section: "about-programs"
  },
  {
    name: "Results",
    link: "#experiment",
    section: "experiment"
  },
  {
    name: "Contact",
    link: "#chat-leo",
    section: "chat-leo"
  }
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.section).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section!);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section!);
            break;
          }
        }
      }

      // If at the very top, set to hero
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    
    if (item.section) {
      const element = document.getElementById(item.section);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: item.section === "hero" ? 0 : offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-full shadow-2xl px-2 py-2">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  "hover:bg-primary/10 hover:text-primary",
                  activeSection === item.section
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground/70"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
