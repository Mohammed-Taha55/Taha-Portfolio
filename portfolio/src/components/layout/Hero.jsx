import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-6 sm:pb-10"
    >
      {/* Eyebrow */}
      <motion.p
        variants={item}
        className="text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-500 mb-5"
      >
        <span className="inline-block w-6 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle mr-3" />
        Frontend Developer
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={item}
        className="text-[2.6rem] sm:text-6xl lg:text-7xl font-display font-800 leading-[1.05] tracking-tight mb-6"
      >
        I craft interfaces{" "}
        <span className="text-neutral-500 dark:text-neutral-500">
          with attention to minor details.
        </span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        variants={item}
        className="max-w-md text-[15px] sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-500 mb-10"
      >
        Hi, I&apos;m <strong className="text-foreground font-semibold">Mohammed Taha</strong> — a frontend
        developer who obsesses over clean code, smooth motion, and building things
        people actually enjoy using.
      </motion.p>

      {/* CTA row */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
            bg-foreground text-background text-sm font-medium
            hover:opacity-85 transition-opacity duration-200"
        >
          View Projects
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
            border border-border text-sm font-medium
            text-neutral-600 dark:text-neutral-300
            hover:bg-neutral-100 dark:hover:bg-neutral-800
            transition-colors duration-200"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.section>
  );
}

