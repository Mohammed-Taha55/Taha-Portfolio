import Github from "../../assets/github.svg"
import Netflix from "../../assets/netflix.svg"
import Saas from "../../assets/saas.png"
import Agency from "../../assets/agency.png"
import Food from "../../assets/food.png"
import Eyemax from "../../assets/eyemax.png"
export default function Projects(){
    return(
 <div className="px-8 py-6 pb-8 max-w-4xl mx-auto border-b dark:border-gray-300 border-r border-l bg-gray-100 dark:bg-black ">
 <h2 className="font-semibold text-xl tracking-wide text-zinc-700 mb-4 underline underline-offset-3 dark:text-gray-300 font-poppins">Projects</h2>

 <div className="grid sm:grid-cols-2 gap-8 cursor-pointer ">
     <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src="https://img.icons8.com/?size=512&id=hp54uGDlrEZB&format=png" alt="Dev Tinder"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-xl mb-1 text-zinc-800 dark:text-white tracking-wider font-poppins font-medium">Dev Tinder</h4>
       <p className="text-xs tracking-wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">Designed a developer networking platform enabling users to connect through shared interests, explore profiles, and interact smoothly through streamlined features focused on collaboration.</p>
       <div className="flex justify-between">
           <a href="https://share.google/0hNLvxlcxzf1zZILV"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/DevTinder-frontend.git"  
           target="_blank"
          rel="noopener noreferrer">
           <img src={Github} className="h-5 dark:invert" />
           </a>
       </div>
     </div>


      {/* <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src={Netflix} alt="Netflix"
      className="w-full overflow-hidden object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-gray-300 tracking-wider">Netflix-GPT</h4>
       <p className="text-xs tracking-wide text-zinc-600 mb-2 dark:text-gray-300 font-robotomono">Developed a Netflix clone with GPT-search integration which recommends movies of user interests using OpenAI.</p>
       <div className="flex justify-between">
           <a href="https://netflix-gpt-omega-pearl.vercel.app"
             target="_blank"
          rel="noopener noreferrer"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/netflix-gpt.git"
            target="_blank"
          rel="noopener noreferrer">
            <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div> */}
  
   <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024" alt="Weather"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-white tracking-wider font-medium">Weather app</h4>
       <p className="text-xs tracking-wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">Created a real-time weather application featuring global forecasts, an interactive map, and clear visual indicators for temperature, conditions, and detailed air quality information.</p>
       <div className="flex justify-between">
           <a href="https://weather-app-omega-indol.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Weather-app.git"
            target="_blank"
          rel="noopener noreferrer">
        <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

      <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src={Agency} alt="Agency"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-white font-medium tracking-wider">Agency-website</h4>
       <p className="text-xs tracking-wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">Developed a modern agency website using React and Tailwind CSS with responsive design, smooth animations, and interactive sections to showcase services, projects, and team.</p>
       <div className="flex justify-between">
           <a href="https://agency-website-gray-mu.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Agency-Website.git"
            target="_blank"
          rel="noopener noreferrer">
           <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>
   
         <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src={Saas} alt="saas"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform "/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-white tracking-wider font-medium">Saas-landing-page</h4>
       <p className="text-xs tracking--wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">Built a polished SaaS landing page with custom gradients, motion effects, and responsive layouts to deliver a visually engaging and professional user experience.</p>
       <div className="flex justify-between">
           <a href="https://saas-dark-landing-page-six.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Saas-dark-landing-page.git"
            target="_blank"
          rel="noopener noreferrer">
          <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

              <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src={Food} alt="saas"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform "/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-white tracking-wider font-medium">Food-app</h4>
       <p className="text-xs tracking--wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">A modern responsive food ordering frontend with dynamic menus, product pages, cart UI, and smooth user experience built using Next.js, TypeScript, and TailwindCSS.</p>
       <div className="flex justify-between">
           <a href="https://food-app-55.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/food-app.git"
            target="_blank"
          rel="noopener noreferrer">
          <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

       <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <img src={Eyemax} alt="saas"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform "/>
       <h4 className="text-xl font-poppins mb-1 text-zinc-700 dark:text-white tracking-wider font-medium">Eyemax-Optical-Store</h4>
       <p className="text-xs tracking--wide text-zinc-600 mb-2 dark:text-gray-400 font-robotomono">I built a modern website for my brother's optical shop, featuring design, engaging GIFs, product displays, service details, and a user experience.</p>
       <div className="flex justify-between">
           <a href="https://eyemax-optical-store.vercel.app/"
            target="_blank"
          rel="noopener noreferrer"
            className="hover:text-black text-zinc-700 hover:underline font-semibold dark:text-gray-300 dark:hover:underline underline-offset-2 transition dark:hover:text-white">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/eyemax.git"
            target="_blank"
          rel="noopener noreferrer">
          <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

 </div>
 </div>

    )
}