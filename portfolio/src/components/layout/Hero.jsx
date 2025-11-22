export default function Hero(){
    return(
        <div className="flex py-6 px-8 flex-col items-center max-w-4xl mx-auto border-b dark:border-gray-300">
             <div className="max-w-4xl mx-auto">
               <h2 className="text-2xl font-bold tracking-wide text-zinc-800 mb-4 underline underline-offset-3 dark:text-gray-300">About Me</h2>
               <p className="text-zinc-600 font-semibold dark:text-gray-400 tracking-wide"> I&apos;m{" "} 
                <span className="text-foreground underline underline-offset-2 font-semibold">
          Taha
        </span>
          .  a{" "}
                 <span className="text-foreground underline underline-offset-2 font-semibold">frontend developer</span>{" "}
                 focused on building clean, intuitive, 
                and <span className="text-foreground underline underline-offset-2 font-semibold">engaging digital experiences</span>. Dedicated to writing clean, 
             {" "} <span className="text-foreground underline underline-offset-2 font-semibold">efficient code</span> {" "}
             and turning complex ideas into simple, visually appealing interfaces, smooth interactions, and 
               {" "} <span className="text-foreground underline underline-offset-2 font-semibold"> polished execution.</span></p>
             </div>
             
        </div>
        
    )
}