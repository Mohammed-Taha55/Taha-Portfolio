import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import Saas from "../../assets/saas.png";
import Agency from "../../assets/agency.png";
import Food from "../../assets/food.png";
import Eyemax from "../../assets/eyemax.png";
import Stock from "../../assets/stock.png";
import ChronoTask from "../../assets/chrono.png";

const projects = [
  {
    id: "stock radar",
    title: "Stock sentiment radar",
    desc: "Stock sentiment radar is a platform that helps you to analyze the sentiment of stocks.",
    image: Stock,
    demo: "https://stock-sentiment-radar.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/Stock_Radar",
  },
  {
    id: "weather",
    title: "Weather App",
    desc: "Real-time forecasts with interactive maps, temperature visuals, and air quality indicators.",
    image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
    demo: "https://weather-app-omega-indol.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/Weather-app.git",
  },
  {
    id: "chrono task",
    title: "Chrono Task",
    desc: "Chrono Task is a task management platform that helps you to manage your tasks and deadlines.",
    image: ChronoTask,
    demo: "https://chronotasks.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/ChronoTask.git",
  },
  {
    id: "agency",
    title: "Agency Website",
    desc: "Responsive agency site with smooth scroll animations and interactive service showcases.",
    image: Agency,
    demo: "https://agency-website-gray-mu.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/Agency-Website.git",
  },
  {
    id: "saas",
    title: "SaaS Landing",
    desc: "Polished dark-theme SaaS page with custom gradients, parallax, and responsive layouts.",
    image: Saas,
    demo: "https://saas-dark-landing-page-six.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/Saas-dark-landing-page.git",
  },
  {
    id: "food",
    title: "Food App",
    desc: "Food ordering frontend with dynamic menus, cart UI, and smooth checkout flow.",
    image: Food,
    demo: "https://food-app-55.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/food-app.git",
  },
  {
    id: "eyemax",
    title: "Eyemax Optical",
    desc: "Optical store site with product displays, service details, and clean user experience.",
    image: Eyemax,
    demo: "https://eyemax-optical-store.vercel.app/",
    github: "https://github.com/Mohammed-Taha55/eyemax.git",
  },
];

function Card({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.06 }}
      className="group relative flex flex-col gap-4"
    >
      {/* TV Bezel / Outer Frame */}
      <div className="relative p-2.5 sm:p-3 rounded-[1.5rem] shadow-xl transition-transform duration-500 
        bg-neutral-100 dark:bg-neutral-900 
        border-t border-l-2 border-r-2 border-b-4 
        border-neutral-300 border-b-neutral-400 
        dark:border-neutral-800 dark:border-b-black">

        {/* TV Screen Area */}
        <div className="relative overflow-hidden rounded-xl aspect-video bg-black shadow-inner">

          {/* Subtle Screen Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-10 pointer-events-none mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />

          {/* Persistent bottom gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-0" />

          {/* Hover dark overlay with action buttons — Hidden on mobile, visible on sm+ */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]
            opacity-0 group-hover:opacity-100 transition-all duration-300
            hidden sm:flex items-center justify-center gap-3 z-20">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full
                bg-white text-neutral-900 text-[12px] font-semibold
                hover:bg-neutral-100 transition-colors duration-200
                translate-y-3 group-hover:translate-y-0 transition-transform"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full
                bg-white/15 backdrop-blur-sm text-white text-[12px] font-semibold
                border border-white/20 hover:bg-white/25 transition-colors duration-200
                translate-y-3 group-hover:translate-y-0 transition-transform"
            >
              <SiGithub size={12} />
              Code
            </a>
          </div>
        </div>

        {/* TV Power Light Indicator */}
        <div className="absolute bottom-1 right-4 w-1.5 h-1.5 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)] group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all duration-300" />
      </div>

      {/* Text content outside the TV */}
      <div className="px-2">
        <h3 className="text-[16px] font-display font-semibold tracking-tight mb-1.5
          text-foreground group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {project.desc}
        </p>

        {/* Mobile-only explicit action buttons */}
        <div className="flex sm:hidden items-center gap-2 mt-4 pt-3 border-t border-border">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
              border border-border dark:bg-neutral-800 text-neutral-900 dark:text-white
              text-[11px] font-semibold transition-colors duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Live View
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
              border border-border text-foreground
              text-[11px] font-semibold transition-colors duration-200"
          >
            <SiGithub size={11} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 sm:px-8 py-6 sm:py-12 sm:pt-24">
      <div className="section-divider mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
          <span className="inline-block w-4 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle mr-2" />
          Selected Work
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-5">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <Card key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}