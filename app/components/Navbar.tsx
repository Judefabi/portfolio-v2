"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_ITEMS } from "@/app/utils/constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      let currentSection = activeSection;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const isActive = (item: { path: string; name: string }) => {
    if (item.path === "/" && activeSection === "home") {
      return true;
    }

    if (item.path.startsWith("#")) {
      const sectionId = item.path.substring(1);
      return activeSection === sectionId;
    }

    return false;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-foreground">JUDE</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAVBAR_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    isActive(item)
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-foreground hover:text-secondary transition-colors"
                  } px-1 py-2 text-sm font-medium`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
