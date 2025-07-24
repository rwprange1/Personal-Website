import { FaJava, FaRust, FaPython, FaHtml5,FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiMongodb, SiExpress, SiLatex } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

function Skills(){


    return(
        <div className="rounded-2xl  content-center text-neutral-600 dark:text-white">
            <h1 className='rounded-full text-5xl  justify-center  flex space-x-3 md:text-4xl dark:text-gray-300 '>
                <text> Skills  </text>
            </h1>
            <div className="flex flex-col lg:flex-row p-2 gap-8 content-center justify-center">
                {/** Box 1 */}
            <div className="flex flex-col lg:flex-row self-center  gap-8 rounded-2xl outline-zinc-700 outline-2 w-full md:w-1/2 text-2xl md:text-xl">
                <div className="flex flex-col  break-words w-full ">
                    <strong className="self-center text-4xl md:text-3xl p-2 dark:text-gray-500"> Languages</strong> 
                    <ul className="self-center space-y-1  list-inside ">
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                                <FaJava size="1.5em"/>
                                <text> Java</text>

                            </div>
                        </li>
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                                <SiTypescript size="1.5em"/>
                                <text> TypeScript</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2">
                                <FaRust size="1.5em"/>
                                <text> Rust</text>

                            </div>
                        </li>
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                                <BiLogoCPlusPlus size="1.5em"/>
                                <text> C++</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2">
                                <FaPython size="1.5em"/>
                                <text> Python</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2">
                                <FaHtml5 size="1.5em"/>
                                <text> HTML/CSS</text>

                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col  break-words w-full ">
                    <strong className="self-center text-4xl md:text-3xl text-gray-500 p-2"> Frameworks</strong> 
                    <ul className="self-center space-y-1   list-inside  ">
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                                <FaReact size="1.5em"/>
                                <text> React</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2">
                                <FaNodeJs size="1.5em"/>
                                <text> NodeJS</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2">
                                <RiTailwindCssFill size="1.5em"/>
                                <text> Tailwind</text>

                            </div>

                            <div className="rounded-full flex space-x-2 pb-2">
                                <SiExpress size="1.5em"/>
                                <text> Express</text>

                            </div>
                        </li>
                    </ul>  
                </div>
        </div>
        {/** Box 2 */}
        <div className="flex flex-col lg:flex-row self-center  gap-8 rounded-2xl outline-zinc-700 outline-2 w-full md:w-1/2 text-2xl md:text-xl min-h-[300px]">
            <div className="flex flex-col   break-words w-full ">
                <strong className="self-center text-4xl md:text-3xl  text-gray-500  p-2"> Databases</strong> 
                <ul className="self-center space-y-1  list-inside  ">
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                            <DiMysql size="1.5em"/>
                            <text> SQL</text>

                        </div>
                        
                    </li>
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                            <SiMongodb size="1.5em"/>
                            <text> MongoDB</text>

                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col  break-words w-full  ">
                <strong className="self-center text-gray-500 text-4xl md:text-3xl p-2"> Other Tools</strong> 
                <ul className="self-center space-y-1   list-inside  ">
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                            <IoLogoGithub size="1.5em"/>
                            <text> Git</text>

                        </div>
                    </li>
                    <li>
                         <div className="rounded-full flex space-x-2 pb-2">
                            <SiLatex size="1.5em"/>
                            <text> LaTeX</text>

                        </div>
                    </li>
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2">
                            <FaDocker size="1.5em"/>
                            <text> Docker</text>

                        </div>
                         
                    </li>

                    <li>

                        <div className="rounded-full flex space-x-2 pb-2">
                            <FcLinux size="1.5em"/>
                            <text> Linux</text>

                        </div>
                    </li>
                </ul>  
            </div>
        </div>



        </div>




        </div>
        

        
    );


}

export default Skills;