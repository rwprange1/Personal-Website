import { FaJava, FaRust, FaPython, FaHtml5,FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiMongodb, SiExpress, SiLatex } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import { BiLogoSpringBoot } from "react-icons/bi";
function Skills(){


    return(
        <div className="rounded-2xl  content-center text-neutral-600 dark:text-white">
            <h1 className='rounded-full text-3xl  justify-center  flex space-x-3 md:text-4xl dark:text-gray-300 '>
                <text> Skills  </text>
            </h1>
            <div className="flex flex-col lg:flex-row p-2 gap-8 content-center justify-center">
                {/** Box 1 */}
            <div className="flex flex-col  xl:min-h-[328px] xl:flex-row self-center gap-2 md:gap-8 rounded-2xl outline-1 outline-gray-300 dark:outline-zinc-700 dark:outline-2 w-full md:w-1/2 text-xl md:text-2xl">
                <div className="flex flex-col break-words w-full ">
                    <strong className="self-center text-xl md:text-3xl p-2 dark:text-gray-500"> Languages</strong> 
                    <ul className="self-center space-y-1 list-inside  ">
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaJava />
                                <text> Java</text>

                            </div>
                        </li>
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <SiTypescript />
                                <text> TypeScript</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaRust />
                                <text> Rust</text>

                            </div>
                        </li>
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <BiLogoCPlusPlus />
                                <text> C++</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaPython />
                                <text> Python</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaHtml5 />
                                <text> HTML/CSS</text>

                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="flex flex-col  break-words w-full ">
                    <strong className="self-center text-xl md:text-3xl text-gray-500 p-2"> Frameworks</strong> 
                    <ul className="self-center space-y-1 list-inside  ">
                        <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaReact />
                                <text> React</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <FaNodeJs />
                                <text> NodeJS</text>

                            </div>
                        </li>
                        <li>
                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <RiTailwindCssFill />
                                <text> Tailwind</text>

                            </div>

                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <SiExpress />
                                <text> Express</text>

                            </div>

                            <div className="rounded-full flex space-x-2 pb-2 items-center">
                                <BiLogoSpringBoot />
                                <text>Spring Boot</text>

                            </div>
                        </li>
                    </ul>  
                </div>
        </div>
        {/** Box 2 */}
        <div className="flex flex-col xl:flex-row xl:min-h-[328px] self-center gap-2 md:gap-8 rounded-2xl outline-1 outline-gray-300 dark:outline-zinc-700 dark:outline-2 w-full md:w-1/2 text-xl md:text-2xl">
            <div className="flex flex-col   break-words w-full ">
                <strong className="self-center text-xl md:text-3xl  text-gray-500  p-2">Databases</strong> 
                <ul className="self-center space-y-1  list-inside  ">
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <DiMysql/>
                            <text> MySQL</text>

                        </div>
                        
                    </li>
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <SiMongodb />
                            <text> MongoDB</text>

                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col  break-words w-full  ">
                <strong className="self-center text-gray-500 text-xl md:text-3xl p-2"> Other Tools</strong> 
                <ul className="self-center space-y-1   list-inside  ">
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <IoLogoGithub/>
                            <text> Git</text>

                        </div>
                    </li>
                    <li>
                         <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <SiLatex />
                            <text> LaTeX</text>

                        </div>
                    </li>
                    <li>
                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <FaDocker />
                            <text> Docker</text>

                        </div>
                         
                    </li>

                    <li>

                        <div className="rounded-full flex space-x-2 pb-2 items-center">
                            <FcLinux />
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