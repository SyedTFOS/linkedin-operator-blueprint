import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  section?: string;
  submenu?: { name: string; link: string; comingSoon?: boolean }[];
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
    link: "#programs",
    submenu: [
      { name: "Done For You", link: "/done-for-you" },
      { name: "Founder", link: "/founder", comingSoon: true },
      { name: "Academy", link: "/academy" },
      { name: "Secrets", link: "/secrets" }
    ]
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

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

      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.submenu) {
      e.preventDefault();
      setOpenDropdown(openDropdown === item.name ? null : item.name);
      return;
    }

    if (item.link.startsWith('/')) {
      e.preventDefault();
      navigate(item.link);
      return;
    }

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

  const handleSubmenuClick = (link: string, comingSoon?: boolean) => {
    if (comingSoon) return;
    navigate(link);
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-8 right-8 z-50 hidden md:block">
      <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-full shadow-2xl px-2 py-2">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                  "hover:bg-primary/10 hover:text-primary",
                  activeSection === item.section
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground/70"
                )}
              >
                {item.name}
                {item.submenu && <ChevronDown className="w-3 h-3" />}
              </a>
              
              {item.submenu && openDropdown === item.name && (
                <div className="absolute top-full right-0 mt-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl py-2 min-w-[200px]">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => handleSubmenuClick(subItem.link, subItem.comingSoon)}
                      className={cn(
                        "w-full text-left px-6 py-2.5 text-sm font-medium transition-all duration-300",
                        subItem.comingSoon
                          ? "text-muted-foreground cursor-not-allowed opacity-50"
                          : "hover:bg-primary/10 hover:text-primary text-foreground/70"
                      )}
                      disabled={subItem.comingSoon}
                    >
                      {subItem.name}
                      {subItem.comingSoon && " (Coming Soon)"}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
