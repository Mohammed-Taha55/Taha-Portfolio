import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { SiGithub } from "react-icons/si";

// Rebuilt your custom TextAnimation component directly here
function TextAnimation({ texts, interval = 3000, typingSpeed = 80, className }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentText = texts[loopNum % texts.length];

    if (isDeleting) {
      // Deleting letters (slightly faster than typing)
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
      }, typingSpeed / 2);
    } else {
      // Typing letters left to right
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    // Handle pauses at the end of typing and deleting
    if (!isDeleting && text === currentText) {
      timer = setTimeout(() => setIsDeleting(true), interval);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, interval, typingSpeed]);

  return (
    <span className={className}>
      {text}
    </span>
  );
}

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for the backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">

        {/* Your Original TextAnimation perfectly integrated */}
        <a href="#" className="flex items-center min-w-[110px]">
          <TextAnimation
            texts={["Taha", "Mohammed"]}
            interval={3000}
            typingSpeed={80}
            className="font-display font-medium text-lg tracking-widest text-foreground"
          />
        </a>

        {/* Nav links — desktop */}
        <div className="hidden sm:flex items-center gap-7 text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
          {["Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg flex items-center justify-center
              text-neutral-500 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition-all duration-200 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span key="moon" initial={{ rotate: -20, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 20, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Moon size={15} />
                </motion.span>
              ) : (
                <motion.span key="sun" initial={{ rotate: 20, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -20, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Sun size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <a
            href="https://github.com/Mohammed-Taha55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-lg flex items-center justify-center
              text-neutral-500 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition-all duration-200"
          >
            <SiGithub size={15} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}