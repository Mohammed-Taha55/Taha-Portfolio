import React from "react";


export default function Portfolio() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
{/* Navbar */}
<nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
<h1 className="text-2xl font-bold tracking-tight">Taha</h1>
<div className="space-x-6 text-sm font-medium hidden sm:flex">
<a href="#about" className="hover:text-indigo-600">About</a>
<a href="#skills" className="hover:text-indigo-600">Skills</a>
<a href="#projects" className="hover:text-indigo-600">Projects</a>
<a href="#contact" className="hover:text-indigo-600">Contact</a>
</div>
</nav>


{/* Hero */}
<section className="px-8 py-20 flex flex-col items-start max-w-4xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Frontend Developer<br/>Crafting Clean & Modern UI</h2>
<p className="mt-4 text-gray-600 text-lg max-w-xl">
I build responsive, fast, and user‑friendly web interfaces using React, TailwindCSS and modern frontend tools.
</p>
<button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition">
View My Work
</button>
</section>


{/* About */}
<section id="about" className="px-8 py-16 max-w-4xl mx-auto">
<h3 className="text-2xl font-bold mb-4">About Me</h3>
<p className="text-gray-700 leading-relaxed">
I'm a frontend developer focused on building clean, intuitive, and engaging digital experiences. I keep things simple — minimal UI, smooth interactions, and polished execution.
</p>
</section>


{/* Skills */}
<section id="skills" className="px-8 py-16 max-w-4xl mx-auto">
<h3 className="text-2xl font-bold mb-6">Skills</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
{["JavaScript", "React.js", "Next.js", "TailwindCSS", "Node.js", "MongoDB"].map((skill) => (
<div key={skill} className="bg-white shadow-sm rounded-xl p-4 text-center font-medium hover:shadow-md transition">
{skill}
</div>
))}
</div>
</section>


{/* Projects */}
<section id="projects" className="px-8 py-16 max-w-4xl mx-auto">
<h3 className="text-2xl font-bold mb-6">Projects</h3>
<div className="grid sm:grid-cols-2 gap-6">
{[1, 2].map((p) => (
<div key={p} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
<div className="h-36 bg-gray-200 rounded-lg mb-4"></div>
<h4 className="text-lg font-semibold mb-1">Project {p}</h4>
<p className="text-sm text-gray-600 mb-2">A clean and minimal UI showcasing modern frontend development.</p>
<button className="text-indigo-600 text-sm font-medium">View Details →</button>
</div>
))}
</div>
</section>


{/* Contact */}
<section id="contact" className="px-8 py-16 max-w-4xl mx-auto">
<h3 className="text-2xl font-bold mb-4">Contact</h3>
<p className="text-gray-700 mb-2">Email: mohammedtaha10683@gmail.com</p>
<p className="text-gray-700">Phone: 9019534549</p>
</section>


{/* Footer */}
<footer className="text-center py-6 text-sm text-gray-500 border-t">
© {new Date().getFullYear()} Taha — Frontend Developer
</footer>
</div>
);
}