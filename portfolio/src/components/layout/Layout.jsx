import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Layout({ children }) {
  return (
    <div className="aurora-bg min-h-screen flex flex-col text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}