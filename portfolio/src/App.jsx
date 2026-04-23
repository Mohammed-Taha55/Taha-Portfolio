import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dot-bg min-h-screen relative">
      <div className="relative z-10">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

