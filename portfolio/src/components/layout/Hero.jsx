export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-6 border-b dark:border-gray-300 border-r border-l bg-gray-100 dark:bg-black ">
      <h2 className="text-xl font-semibold  underline underline-offset-4 mb-4 mt-12 dark:text-gray-300 text-gray-700 font-poppins">
        About Me
      </h2>

      <p className="text-zinc-800 dark:text-gray-400 leading-relaxed text-sm text-md tracking-wider font-robotomono">
        I'm{" "}
        <span className="font-semibold underline underline-offset-2 text-black dark:text-gray-200">
          Taha
        </span>
        , a{" "}
        <span className="font-semibold underline underline-offset-2 text-black dark:text-gray-200">
          frontend developer
        </span>{" "}
        focused on building clean, intuitive, and engaging{" "}
        <span className="font-semibold underline underline-offset-2 text-black dark:text-gray-200">
           digital experiences
        </span>
        . I write{" "}
        <span className="font-semibold underline underline-offset-2 text-black dark:text-gray-200">
          efficient code
        </span>{" "}
        and turn complex ideas into simple,{" "}
        <span className="font-semibold underline underline-offset-2 text-black dark:text-gray-200">
          polished execution
        </span>
        .
      </p>
    </div>
  );
}
