import Mail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-8 max-w-4xl mx-auto border-b dark:border-gray-300 bg-gray-100 dark:bg-black border-r border-l"
    >
      <h3 className="text-xl font-semibold mb-6 underline underline-offset-4 dark:text-gray-300 tracking-wide text-zinc-700 font-poppins">
        Get In Touch
      </h3>

      <div className="space-y-4">

        
        <a
          href="mailto:mohammedtaha10683@gmail.com"
          className="flex items-center gap-3 bg-gray-100 dark:bg-zinc-900 hover:shadow-md shadow-sm 
                     rounded-xl p-4 transition-all dark:hover:bg-zinc-800 group"
        >
          <img src={Mail} className="h-6 opacity-80 group-hover:opacity-100" />
          <span className="text-sm text-zinc-700 dark:text-gray-300 font-robotomono group-hover:underline">
            mohammedtaha10683@gmail.com
          </span>
        </a>

  
        <a
          href="https://www.linkedin.com/in/mohammed-taha-aa449733a"
          target="_blank"
          className="flex items-center gap-3 bg-gray-100 dark:bg-zinc-900 hover:shadow-md shadow-sm 
                     rounded-xl p-4 transition-all dark:hover:bg-zinc-800 group"
        >
          <img src={Linkedin} className="h-7 opacity-80 group-hover:opacity-100" />
          <span className="text-sm text-zinc-700 dark:text-gray-300 font-robotomono group-hover:underline">
            Mohammed Taha
          </span>
        </a>

  
        <a
          href="https://github.com/Mohammed-Taha55"
          target="_blank"
          className="flex items-center gap-3 bg-gray-100 dark:bg-zinc-900 hover:shadow-md shadow-sm 
                     rounded-xl p-4 transition-all dark:hover:bg-zinc-800 group"
        >
          <img src={Github} className="h-6 dark:invert opacity-80 group-hover:opacity-100" />
          <span className="text-sm text-zinc-700 dark:text-gray-300 font-robotomono group-hover:underline">
            Mohammed-Taha55
          </span>
        </a>

      </div>
    </section>
  );
}
