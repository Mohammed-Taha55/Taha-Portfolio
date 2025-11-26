export default function Footer() {
  return (
    <div
      className="
        max-w-4xl mx-auto px-6 py-2 
        flex flex-col items-center gap-2
        sm:flex-row sm:justify-between sm:items-center
        border-r border-l dark:border-gray-300 bg-gray-100 dark:bg-black 
      "
    >
      <h3 className="text-lg sm:text-xl text-zinc-700 font-poppins dark:text-gray-400 text-center tracking-wider sm:text-left">
        Designed and Coded by{" "}
        <span className="underline underline-offset-2  text-zinc-700 tracking-wide dark:text-gray-300 font-poppins">
          Taha
        </span>
      </h3>

      <h3 className="text-zinc-700 dark:text-gray-300 font-medium text-center sm:text-right tracking-wide font-poppins">
        2025
      </h3>
    </div>
  );
}
