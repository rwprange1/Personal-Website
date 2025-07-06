import {useState} from 'react';



import List from "../List/List";
import Work from "../Work/Work";
import Header from "../Header"

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React from "react";



function Home(){

    const [lightMode, setLightMode] = useState<boolean>(false);

    return (
    
    <div className="bg-zinc-700 w-2/3 rounded-2xl min-h-lvh items-center justify-center m-auto relative overflow-x-visible px-6">
  <Header light={lightMode} />

  <h1 className="text-white text-sm sm:text-4xl mb-3">
    Mathematician, Computer Scientist, Student, and Mountain Lover
  </h1>

  <h2 className="text-gray-300 sm:text-2xl">
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

  {/* Wrapping relative container to preserve flow */}
  <div className="relative h-[27rem]">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%] flex gap-x-6 h-auto">
      <img src="src/assets/grad.jpg" className="w-1/5 h-auto rounded-2xl" />
      <img src="src/assets/wf.jpg" className="w-1/5 h-auto rounded-2xl" />
      <img src="src/assets/bl.jpg" className="w-1/5 h-auto rounded-2xl" />
      <img src="src/assets/park.jpg" className="w-1/5 h-auto rounded-2xl" />
      <img src="src/assets/guermo.jpg" className="w-1/5 h-auto rounded-2xl" />
    </div>
  </div>

  <List />
  <Work />
</div>




    )
}
export default Home