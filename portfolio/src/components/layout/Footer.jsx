import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-5 sm:px-8 pb-6 pt-3">
      <div className="section-divider mb-8" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-neutral-500 dark:text-neutral-500"
      >
        <span className="font-mono text-center sm:text-left">
          &copy; {new Date().getFullYear()} Mohammed Taha
        </span>

        <span className="font-mono text-center sm:text-right">
          Designed & Coded by Taha
        </span>
      </motion.div>
    </footer>
  );
}