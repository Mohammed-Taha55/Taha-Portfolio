export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8 border-b dark:border-gray-300">
      <h2 className="text-2xl font-bold tracking-wide underline underline-offset-4 mb-4 mt-12 dark:text-gray-300 text-gray-700">
        About Me
      </h2>

      <p className="text-zinc-800 dark:text-gray-400 leading-relaxed font-medium text-md tracking-widest">
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
