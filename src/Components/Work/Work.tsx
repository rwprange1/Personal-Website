import { FaTools } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi"; 

import wcu from '../../assets/wcu.webp';
import clt from '../../assets/clt.png'
import gran from '../../assets/granges_logo_thumb.png'


function Work(){
    return(
        <div className="flex flex-col text-md md:text-lg rounded-md  text-neutral-600 dark:text-gray-400 p-2  outline-1 outline-gray-300 dark:outline-zinc-700 dark:outline-2 mb-2">
            <h1 className='rounded-full  justify-center  flex space-x-3 text-xl'>
                <FaTools size="1.2em" />
                <text> Experience </text> 
                <FaTools size="1.2em" />                   
            </h1>

            <div className="pt-5 p-1  mb-2">
               <ul role="list">     
                    <li className="flex py-4 first:pt-0 last:pb-0">      
                        <img className="h-10 w-10 rounded-full" src={gran} alt="" />      
                        <div className="ml-3 overflow-hidden">        
                            <p className="text-md md:text-lg font-medium text-gray-900 dark:text-white">Quality and Technical Intern</p>        
                            <p className="truncate text-sm md:text-md text-gray-500 dark:text-gray-400">Granges Americas, Salisbury, N.C.</p>      
                        </div>    
                    </li>  
                    <li className="flex py-4 first:pt-0 last:pb-0">      
                        <img className="h-10 w-10 rounded-full" src={wcu} alt="" />      
                        <div className="ml-3 overflow-hidden">        
                            <p className="text-md md:text-lg text-gray-900 dark:text-white"> Mathematics and Computer Science Tutor</p>        
                            <p className="truncate text-sm md:text-md text-gray-500 dark:text-gray-400">Western Carolina University, Cullowhee, N.C.</p>      
                        </div>    
                    </li>  
                    <li className="flex py-4 first:pt-0 last:pb-0">      
                        <img className="h-10 w-10 rounded-full" src={clt} alt="" />      
                        <div className="ml-3 overflow-hidden">        
                            <p className="text-md md:text-lgfont-medium text-gray-900 dark:text-white">Graduate Assistant</p>        
                            <p className="truncate text-sm md:text-md text-gray-500 dark:text-gray-400">University of North Carolina at Charlotte, Charlotte, N.C.</p>      
                        </div>    
                    </li>  
                </ul>

            </div>

          <a href="/res.pdf" download="Richard-Resume.pdf" className=" w-full text-center rounded-2xl px-2 py-1 text-white bg-purple-500  hover:bg-purple-600">Download Resume &darr;</a>
            
            <hr className="mt-4 w-full outline-1 outline-gray-300 dark:outline-zinc-700 dark:outline-2"></hr>

            <h1 className='rounded-full  justify-center  mt-3 flex space-x-3 text-xl '>
                <GiBookmarklet size="1.4em" />
                <text> Education </text>
                <GiBookmarklet size="1.4em" />

                                      
            </h1>

            <div className="pt-5 p-1 border-spacing-y-2  mb-2 ">
                <ul role="list">     
                    <li className="flex py-4 first:pt-0 last:pb-0">      
                        <img className="h-10 w-10 rounded-full" src={wcu} alt="" />      
                        <div className="ml-3 overflow-hidden">        
                            <p className="text-md md:text-lg font-medium text-gray-900 dark:text-white"> B.S. Traditional Mathematics</p>        
                            <p className="truncate text-sm md:text-md text-gray-500 dark:text-gray-400">Western Carolina University, Cullowhee, N.C.</p>      
                        </div>    
                    </li>  
                    <li className="flex py-4 first:pt-0 last:pb-0">      
                        <img className="h-10 w-10 rounded-full" src={wcu} alt="" />      
                        <div className="ml-3 overflow-hidden">        
                            <p className="text-md md:text-lg font-medium text-gray-900 dark:text-white"> B.S. Computer Science</p>        
                            <p className="truncate text-sm md:text-md text-gray-500 dark:text-gray-400">Western Carolina University, Cullowhee, N.C.</p>      
                        </div>    
                    </li>  
                </ul>
            </div>

            

            <a href="/transcript.pdf" download="Richard-trans.pdf" className="p-2 w-full text-center rounded-2xl text-white px-2 py-1 bg-purple-500  hover:bg-purple-600">Download Transcript &darr;</a>
            



        </div>



    );



}


export default Work;