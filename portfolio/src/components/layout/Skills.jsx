import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiRedux, SiShadcnui, SiFramer, SiGit,
  SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiVercel,
} from "react-icons/si";
import { RiSparklingFill } from "react-icons/ri";

const stack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: null },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "ShadCN", icon: SiShadcnui, color: null },
  { name: "Framer", icon: SiFramer, color: "#05F" },
  { name: "Git", icon: SiGit, color: "#F1502F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" },
  { name: "Express", icon: SiExpress, color: null },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Generative AI", icon: RiSparklingFill, color: "#A855F7" },
  { name: "Vercel", icon: SiVercel, color: null },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 sm:px-8 py-6 sm:py-10 sm:pt-18">
      {/* Divider */}
      <div className="section-divider mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
          <span className="inline-block w-4 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle mr-2" />
          Tech Stack
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6">
          Tools I Work With
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {stack.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col items-center gap-2.5 py-5 px-2 rounded-xl
                border border-transparent
                hover:border-border hover:bg-white/60 dark:hover:bg-neutral-900/60
                transition-all duration-200 cursor-default"
            >
              <Icon
                size={22}
                style={tech.color ? { color: tech.color } : undefined}
                className={tech.color ? "" : "text-foreground"}
              />
              <span className="text-[11px] font-mono font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
