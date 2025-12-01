import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import List from "../List/List";
import Work from "../Work/Work";
import Skills from "../Skills";
import Photos from "../Photos";

function Home(){
  
  return (
    <div className="h-auto">
      <h1 className="dark:text-white text-2xl sm:text-4xl mb-3">
        Mathematician, Computer Scientist, Mountain Lover
      </h1>

      <h2 className="text-gray-500 text-xl sm:text-2xl">
        I'm Richard, a Graduate Student at UNC Charlotte. I graduated from Western Carolina University with degrees in Mathematics and Computer Science.
        I am a part time game developer, and I enjoy to cook, play games, and hike.
      </h2>

      <div className="inline-flex space-x-4 my-4 mb-5 md:mb-10 text-2xl md:text-4xl ">
        <a href="https://github.com/rwprange1" target='_blank' className='hover:outline-1  hover:outline-purple-400 rounded-full'>
          <IoLogoGithub  />
        </a>
    
        <a href="https://www.linkedin.com/in/richard-p-38804a254" target='_blank' className='hover:outline-1 hover:outline-purple-400 rounded-sm'>
          <FaLinkedin  />
        </a>
      </div>


      <Photos/>
      <br   className="mb-6"></br>
      <Skills/>


     <div className="flex flex-col lg:flex-row pt-16 pb-0 gap-8">
        <div className="flex flex-col text-lg text-gray-500 break-words w-full lg:w-1/2">
          <List />
        </div>
        <div className="flex flex-col text-lg text-gray-500 break-words w-full lg:w-1/2">
          
          <Work />          
        </div>
      </div>

      

           

      
      
    </div>
  )
}
export default Home