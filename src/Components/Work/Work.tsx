import React from "react";
import { FaTools } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
function Work(){

    return(

        <div className="flex flex-col  rounded-md  text-neutral-600 dark:text-gray-400 p-2  outline-2 outline-zinc-700 mb-2">
            <h1 className='rounded-full  justify-center  flex space-x-3 text-xl'>
                <FaTools size="1.2em" />
                <text> Experience </text> 
                <FaTools size="1.2em" />                   
            </h1>

            <div className="pt-5 p-1 border-spacing-y-2  ">
                <div className="rounded-full flex space-x-2 pb-2">
                    <img className="w-10 h-10 rounded-full" src="src/assets/granges_logo_thumb.png" alt="gran"/> 
                    <text className="px-3 py-1.5"> Quality and Technical Intern </text>
                </div> 
                <div className="  rounded-full flex space-x-2  pb-2">
                    <img className="w-10 h-10 rounded-full" src="src/assets/wcu.webp" alt="gran"/> 
                    <text className="px-3 py-1.5"> Mathemtaics and Computer Science Tutor </text>
                </div>
            
                <div className="  rounded-full flex space-x-2  pb-2">
                    <img className="w-10 h-10 rounded-full" src="src/assets/clt.png" alt="gran"/> 
                    <text className="px-3 py-1.5"> Graduate Assistant </text>
                </div>


            </div>

          <a href="" download="Richard-Resume.pdf" className=" w-full text-center rounded-2xl px-2 py-1 text-white bg-purple-500  hover:bg-purple-600  dark:bg-zinc-700 dark:hover:bg-zinc-600">Download Resume &darr;</a>
            
            <hr className="mt-4 w-full border-zinc-700 border"></hr>

            <h1 className='rounded-full  justify-center  mt-3 flex space-x-3 text-xl '>
                <GiBookmarklet size="1.4em" />
                <text> Education </text>
                <GiBookmarklet size="1.4em" />

                                      
            </h1>

            <div className="pt-5 p-1 border-spacing-y-2  ">
                <div className="rounded-full flex space-x-2 pb-2">
                    <img className="w-10 h-10 rounded-full" src="src/assets/wcu.webp" alt="gran"/> 
                    <text className="px-3 py-1.5"> B.S Traditional Mathematics </text>
                </div> 
                <div className="  rounded-full flex space-x-2  pb-2">
                    <img className="w-10 h-10 rounded-full" src="src/assets/wcu.webp" alt="gran"/> 
                    <text className="px-3 py-1.5"> B.S Computer Science</text>
                </div>
            
                


            </div>
            <a href="" download="Richard-trans.pdf" className="p-2 w-full text-center rounded-2xl text-white px-2 py-1 bg-purple-500  hover:bg-purple-600 dark:bg-zinc-700 dark:hover:bg-zinc-600">Download Transcript &darr;</a>
            



        </div>



    );



}


export default Work;