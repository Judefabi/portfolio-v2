"use client";

import About from "./components/about/page";
import Contact from "./components/contact/page";
import Home from "./components/Home/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";
import SpotlightEffect from "./components/SpotlightEffect";

export default function Main() {
  return (
    <div className="relative">
      {/* Global Spotlight effect that follows the mouse across the entire page */}
      <SpotlightEffect
        size={800}
        color="var(--spotlight)"
        opacity={0.15}
        fadeDistance={40}
        fixed={true}
      />

      {/* Page sections */}
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
