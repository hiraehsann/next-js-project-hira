import React from 'react'

const page = () => {
  return(
     <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/hira pic.jpeg"alt="" width="384" height="512"/>
     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
       <blockquote>
         <p className="text-lg font-medium">
           “ I'm a YouTube SEO expert dedicated to helping channels grow and reach their full potential. Whether you're just starting or looking to expand your audience, I optimize your content to increase visibility, boost engagement, and drive success on YouTube.”
         </p>
       </blockquote>
       <figcaption className="font-medium">
         <div className="text-sky-500 dark:text-sky-400">
           Hira Ehsan
         </div>
         <div className="text-slate-700 dark:text-slate-500">
           YouTube SEO Specialist, Fiverr
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page

