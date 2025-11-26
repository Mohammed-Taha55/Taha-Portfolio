import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors">
      
      <Navbar />

      <main className="flex-1">
        {children}
      </main>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
     
      <Footer />
    </div>
  )
}
