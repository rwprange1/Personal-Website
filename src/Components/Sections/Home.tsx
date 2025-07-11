import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import List from "../List/List";
import Work from "../Work/Work";

function Home(){
  
  return (
    <div >
      <h1 className="text-white text-xl sm:text-4xl mb-3">
        Mathematician, Computer Scientist, Mountain Lover
      </h1>

      <h2 className="text-gray-300  sm:text-2xl">
        I'm Richard, a software engineer and Mathematician at ... I graduated undergrad with a Mathematics and Computer Science degree.
        I am a part time game developer, and I enjoy to cook, play games, and hike.
      </h2>

      <div className="inline-flex space-x-4 my-4 mb-10">
        <a href="https://github.com/rwprange1" target='_blank' className='hover:outline-1 hover:outline-purple-400 rounded-full'>
          <IoLogoGithub size="2.5em" />
        </a>
    
        <a href="https://www.linkedin.com/in/richard-p-38804a254" target='_blank' className='hover:outline-1 hover:outline-purple-400 rounded-sm'>
          <FaLinkedin size="2.5em" />
        </a>
      </div>


      <div className="hidden md:flex relative h-[27rem]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%] flex gap-x-12 h-auto">
          <img src="src/assets/grad.jpg" className="w-1/5  rounded-2xl rotate-355" />
          <img src="src/assets/wf.jpg" className="w-1/5  rounded-2xl rotate-8" />
          <img src="src/assets/bl.jpg" className="w-1/5  rounded-2xl rotate-358" />
          <img src="src/assets/park.jpg" className="w-1/5  rounded-2xl rotate-10" />
          <img src="src/assets/guermo.jpg" className="w-1/5  rounded-2xl rotate-359" />
        </div>
      </div>


       <div className=" hidden relative h-[27rem]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%] flex gap-x-12 h-auto">
          <img src="src/assets/grad.jpg" className="w-1/5 h-auto rounded-2xl rotate-355" />
          <img src="src/assets/wf.jpg" className="w-1/5 h-auto rounded-2xl rotate-8" />
          <img src="src/assets/bl.jpg" className="w-1/5 h-auto rounded-2xl rotate-358" />
          <img src="src/assets/park.jpg" className="w-1/5 h-auto rounded-2xl rotate-10" />
          <img src="src/assets/guermo.jpg" className="w-1/5 h-auto rounded-2xl rotate-359" />
        </div>
      </div>

      <List />
      <Work />
    </div>
  )
}
export default Home