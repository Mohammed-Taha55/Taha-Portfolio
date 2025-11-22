export default function Footer() {
  return (
    <div
      className="
        max-w-4xl mx-auto px-8 py-4 
        flex flex-col items-center gap-2
        sm:flex-row sm:justify-between sm:items-center
      "
    >
      <h3 className="text-lg sm:text-xl text-zinc-700 font-semibold dark:text-gray-400 text-center sm:text-left">
        Designed and Coded by{" "}
        <span className="underline underline-offset-2 font-bold text-zinc-800 dark:text-gray-200">
          Taha
        </span>
      </h3>

      <h3 className="text-zinc-900 dark:text-gray-300 font-medium text-center sm:text-right">
        2025
      </h3>
    </div>
  );
}
