import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";
import "./Navbar.css";
import TextAnimation from "./TextAnimation";
import Github from "../../assets/github.svg";

export default function Navbar({ theme, setTheme }) {

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-white dark:bg-black 
        backdrop-blur-lg 
        border-b border-gray-300 dark:border-gray-300
      "
    >
      <div className="max-w-4xl mx-auto px-8 py-3 flex items-center justify-between">
        
        {/* Animated Name */}
        <TextAnimation
          texts={["Taha", "Mohammed"]}
          interval={3000}
          typingSpeed={80}
          className="text-xl font-bold text-gray-700 dark:text-gray-300 tracking-wide"
        />

      <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 hidden sm:block">
  Frontend Developer
</h3>

        <div className="flex gap-2">
          <button onClick={toggleTheme} className="p-2">
            {theme === "light" ? (
              <img key="moon" src={Moon} className="h-5 icon-switch cursor-pointer" />
            ) : (
              <img key="sun" src={Sun} className="h-5 invert icon-switch cursor-pointer" />
            )}
          
          </button>
                 <a href="https://github.com/Mohammed-Taha55/Taha-Portfolio.git"  target="_blank"
          rel="noopener noreferrer"><img src={Github} alt="" className="h-5 mt-2 dark:invert cursor-pointer"/></a>
        </div>
      </div>
    </header>
  );
}
