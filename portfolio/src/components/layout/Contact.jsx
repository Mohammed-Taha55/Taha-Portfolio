import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "mohammedtaha10683@gmail.com",
    href: "mailto:mohammedtaha10683@gmail.com",
    icon: Mail,
    note: "Reach out directly",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Mohammed Taha",
    href: "https://www.linkedin.com/in/mohammed-taha-aa449733a",
    icon: Linkedin,
    note: "Let's connect",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-8 py-6 sm:py-12 sm:pt-24">
      <div className="section-divider mb-10" />

      {/* Section heading — identical pattern to Skills & Projects */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
          <span className="inline-block w-4 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle mr-2" />
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
          Let&apos;s Connect
        </h2>
      </motion.div>

      {/* Cards — same surface pattern as Skills / Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center gap-4 p-4 sm:p-5 rounded-xl
                border border-transparent
                hover:border-border hover:bg-white/60 dark:hover:bg-neutral-900/60
                transition-all duration-200"
            >
              {/* Icon — plain, monochrome, no color badge */}
              <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                bg-neutral-100 dark:bg-neutral-800/60
                border border-border
                group-hover:bg-neutral-200/70 dark:group-hover:bg-neutral-700/50
                transition-colors duration-200">
                <Icon
                  size={18}
                  className="text-neutral-500 dark:text-neutral-400 group-hover:text-foreground transition-colors duration-200"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-500 mb-0.5">
                  {contact.label}
                </p>
                <span className="text-[13px] sm:text-[14px] font-medium text-foreground truncate block
                  group-hover:text-foreground/80 transition-colors duration-200">
                  {contact.value}
                </span>
              </div>

              {/* Arrow */}
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                border border-border text-neutral-400 dark:text-neutral-500
                group-hover:bg-foreground group-hover:text-background group-hover:border-foreground
                transition-all duration-200">
                <ArrowUpRight
                  size={15}
                  className="group-hover:rotate-12 transition-transform duration-200"
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}