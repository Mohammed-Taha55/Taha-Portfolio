import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGmail, SiLinkedin } from "react-icons/si";

const contacts = [
  {
    id: "email",
    title: "Email",
    value: "mohammedtaha10683@gmail.com",
    href: "mailto:mohammedtaha10683@gmail.com",
    icon: SiGmail,
    brandColor: "#EA4335", // Google Red
    bgClass: "bg-red-50 dark:bg-red-500/10",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Mohammed Taha",
    href: "https://www.linkedin.com/in/mohammed-taha-aa449733a",
    icon: SiLinkedin,
    brandColor: "#0A66C2", // LinkedIn Blue
    bgClass: "bg-blue-50 dark:bg-blue-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-8 py-6 sm:py-12 sm:pt-24">
      <div className="section-divider mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg mx-auto mb-6 sm:mb-8"
      >
        <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
          <span className="inline-block w-4 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle mr-2" />
          Contact
          <span className="inline-block w-4 h-[1px] bg-neutral-300 dark:bg-neutral-700 align-middle ml-2" />
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-3">
          Let&apos;s Connect
        </h2>
      </motion.div>

      {/* Grid: Stacks on mobile, side-by-side on tablet/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group flex items-center p-4 sm:p-5 rounded-2xl 
                bg-white dark:bg-neutral-900/50 backdrop-blur-sm
                border border-border transition-all duration-300
                active:scale-[0.98] 
                hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40`}
            >
              {/* Icon Container - Removed scaling on hover */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full flex items-center justify-center ${contact.bgClass} transition-colors duration-300`}>
                <Icon size={24} color={contact.brandColor} />
              </div>

              {/* Text Content */}
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-neutral-400 dark:text-neutral-500 mb-0.5">
                  {contact.title}
                </p>
                <h3 className="text-[14px] sm:text-[15px] font-medium text-foreground truncate w-full group-hover:text-foreground/80 transition-colors">
                  {contact.value}
                </h3>
              </div>

              {/* Action Button / Arrow */}
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center 
                border border-border text-neutral-400 dark:text-neutral-500
                group-hover:bg-foreground group-hover:text-background group-hover:border-foreground
                transition-all duration-300 ml-2">
                <ArrowUpRight size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}