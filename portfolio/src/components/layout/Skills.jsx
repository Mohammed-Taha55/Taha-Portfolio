import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiFramer,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel
} from "react-icons/si";

 // correct Postman icon

export default function Skills() {

  const primary = [
    { name: "React.js", icon: <SiReact size={22} className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript size={22} className="text-[#F7DF1E]" /> },
    { name: "Next.js", icon: <SiNextdotjs size={22} /> },
    { name: "TypeScript", icon: <SiTypescript size={22} className="text-[#3178C6]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={22} className="text-[#38BDF8]" /> },
    { name: "Redux", icon: <SiRedux size={22} className="text-[#764ABC]" /> },
    { name: "ShadCN", icon: <SiShadcnui size={22} /> },
    { name: "Motion", icon: <SiFramer size={22} className="text-[#0055FF]" /> },
    { name: "Git", icon: <SiGit size={22} className="text-[#F1502F]" /> },
  ];

  const secondary = [
    { name: "Node.js", icon: <SiNodedotjs size={22} className="text-[#8CC84B]" /> },
    { name: "Express.js", icon: <SiExpress size={22} /> },
    { name: "MongoDB", icon: <SiMongodb size={22} className="text-[#47A248]" /> },

    { name: "Vercel", icon: <SiVercel size={22} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-8 border-b dark:border-gray-300">
      <h2 className="font-bold text-2xl tracking-wide underline underline-offset-4 mb-4">Skills</h2>

      <p className="mb-2 font-medium text-zinc-800 dark:text-gray-300">Primary</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {primary.map((skill) => (
          <div key={skill.name}
            className="flex items-center gap-2 bg-gray-100 cursor-pointer shadow-sm text-zinc-700 
                       rounded-xl p-3 hover:shadow-md transition-transform font-semibold hover:scale-[1.04] dark:bg-zinc-900 dark:text-gray-300">
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>

      <p className="mt-6 mb-2 font-medium text-zinc-800 dark:text-gray-300">Secondary</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        {secondary.map((skill) => (
          <div key={skill.name}
            className="flex items-center gap-2 bg-gray-100 cursor-pointer shadow-sm text-zinc-700 
                       rounded-xl p-3 hover:shadow-md transition-transform font-semibold hover:scale-[1.04] dark:bg-zinc-900 dark:text-gray-300">
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

