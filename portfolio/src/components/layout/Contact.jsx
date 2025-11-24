import Mail from "../../assets/gmail.svg"
import Linkedin from "../../assets/linkedin.svg"
import Github from "../../assets/github.svg"
export default function Contact(){
    return(
        <section id="contact" className="px-8 py-8 max-w-4xl mx-auto border-b dark:border-gray-300">
<h3 className="text-2xl font-bold mb-4 underline underline-offset-3 dark:text-gray-300 tracking-wide text-zinc-700">Get in Touch</h3>


    <div className="bg-gray-100 shadow-sm hover:shadow-md rounded dark:bg-zinc-900 dark:hover:bg-zinc-800">
        <p className="text-gray-700 mb-3 flex gap-2">  <img src={Mail} className="h-5 m-1"/>  <a href="mailto:mohammedtaha10683@gmail.com"
        className="hover:text-zinc-900 transition font-semibold tracking-wide dark:text-gray-300 text-zinc-700">
            mohammedtaha10683@gmail.com</a></p>
    </div>

<div className="bg-gray-100 shadow-sm hover:shadow-md rounded dark:bg-zinc-900 dark:hover:bg-zinc-800">
    <p className="text-gray-700 flex mb-3 gap-2"> <img src={Linkedin} className="h-5 m-1"/><a href="https://www.linkedin.com/in/mohammed-taha-aa449733a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    className="font-semibold transition tracking-wide hover:text-zinc-900 dark:text-gray-300 text-zinc-700">
        Mohammed Taha</a></p>
</div>

<div className="bg-gray-100 shadow-sm hover:shadow-md rounded dark:bg-zinc-900 dark:hover:bg-zinc-800">
    <p className="text-gray-700 flex  gap-2"> <img src={Github} className="h-5 m-1 dark:invert"/><a href="https://github.com/Mohammed-Taha55"
    className="font-semibold transition tracking-wide hover:text-zinc-900 dark:text-gray-300 text-zinc-700">
        Mohammed Taha-55</a></p>
</div>

</section>
    )
}