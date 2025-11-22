import Github from "../../assets/github.svg"
export default function Projects(){
    return(
 <div className="px-8 py-8 max-w-4xl mx-auto border-b dark:border-gray-300">
 <h2 className="font-bold text-2xl tracking-wide text-zinc-700 mb-4 underline underline-offset-3 dark:text-gray-300">Projects</h2>

 <div className="grid sm:grid-cols-2 gap-8 cursor-pointer ">
     <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900">
      <img src="https://img.icons8.com/?size=512&id=hp54uGDlrEZB&format=png" alt="Dev Tinder"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-lg font-semibold mb-1 text-zinc-700 dark:text-gray-300">Dev Tinder</h4>
       <p className="text-sm text-zinc-600 mb-2 dark:text-gray-300">A developer networking platform to connect coders with similar interests.</p>
       <div className="flex justify-between">
           <a href="https://share.google/0hNLvxlcxzf1zZILV"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/DevTinder-frontend.git">
           <img src={Github} className="h-5 dark:invert" />
           </a>
       </div>
     </div>


      <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900">
      <img src="https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj" alt="Netflix"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-lg font-semibold mb-1 text-zinc-700 dark:text-gray-300">Netflix-GPT</h4>
       <p className="text-sm text-zinc-600 mb-2 dark:text-gray-300">Developed a Netflix clone with GPT-search integration which recommends movies of user interests using OpenAI.</p>
       <div className="flex justify-between">
           <a href="http://netflix-gpt-bice-kappa.vercel.app"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/netflix-gpt.git">
            <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>
  
   <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900">
      <img src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024" alt="Weather"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-lg font-semibold mb-1 text-zinc-700 dark:text-gray-300">Weather app</h4>
       <p className="text-sm text-zinc-600 mb-2 dark:text-gray-300">A real time weather app which shows weather details accross the globe, with a custom map showcaing lengend amd air quality</p>
       <div className="flex justify-between">
           <a href="https://weather-app-omega-indol.vercel.app/"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Weather-app.git">
        <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

      <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900">
      <img src="https://ik.imagekit.io/5hquntidz/Screenshot%20(15).png?updatedAt=1761211764602" alt="Weather"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-lg font-semibold mb-1 text-zinc-700 dark:text-gray-300">Agency-website</h4>
       <p className="text-sm text-zinc-600 mb-2 dark:text-gray-300">A modern, responsive agency website built with React and Tailwind CSS, featuring dark mode, smooth animations, and interactive components to showcase services, work, and team.</p>
       <div className="flex justify-between">
           <a href="https://agency-website-gray-mu.vercel.app/"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Agency-Website.git">
           <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>
   
         <div className="bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition dark:bg-zinc-900">
      <img src="https://i.ibb.co/CpScVKcs/Screenshot-16.png" alt="saas"
      className="w-full object-contain h-36 rounded-lg mb-4 hover:scale-110 transition-transform"/>
       <h4 className="text-lg font-semibold mb-1 text-zinc-700 dark:text-gray-300">Saas-dark-landing-page</h4>
       <p className="text-sm text-zinc-600 mb-2 dark:text-gray-300"> Built a sleek SaaS landing page featuring custom gradients and smooth motion effects to create a visually engaging and professional user 
experience.</p>
       <div className="flex justify-between">
           <a href="https://saas-dark-landing-page-six.vercel.app/"
            className="hover:text-zinc-600 font-semibold">
                Explore →</a>
           <a href="https://github.com/Mohammed-Taha55/Saas-dark-landing-page.git">
          <img src={Github} className="h-5 dark:invert"/>
           </a>
       </div>
     </div>

 </div>
 </div>

    )
}