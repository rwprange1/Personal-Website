
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

import grad from '../../assets/grad.jpg';

function About() {

    return (
        <div className="flex flex-col lg:flex-row pt-16 pb-0 gap-8">

            <div className="flex flex-col text-lg  text-neutral-600 dark:text-gray-500 mb-3 wrap-break-word w-full lg:w-1/2">
                
                <h1 className="text-xl sm:text-5xl p-5 pb-4 dark:text-white">
                    I'm Richard Prange, I live in Charlotte, North Carolina where I attend UNC Charlotte.
                </h1>

                <text className="p-5">
                    I've always enjoyed understanding how things work, however I was never a big tinkerer as I was afraid of breaking things. 
                    This changed in college when all of my peers were into computer science and pc building.
                </text>

                <text className="p-5">
                    In college I spent a majority of my time programming and learning that every statement in mathematics needs to be proved.
                    Many of my projects will be linked in the 'Projects' tab of the webpage and I hope that youll be able to see my progression as a software developer and engineer.
                    I also spent my senior year doing research in Ramsey Theory which can be found in the 'Research' tab.
                </text>

                <text className="p-5">
                    My favorite languages would have to be C++ and Rust, if you don't believe me take a quick look at the afromentioned 'Projects' tab and come back. 
                    I like the low level control and the feeling of optimization and speed (not to claim that my programs are the fastest or well optimized). 
                    I've also taking a liking to web-development, this passion came through my senior year capstone where me and my teamates built, containerized and deployed a full stack web application for a client (shout out to Tailwind as I HATE CSS). 
                </text>

                <text className="p-5">
                    While completing my masters in Mathematics at UNC Charlotte I plan to continue to work on and improve my programming skills by adding projects to this website.
                </text>

                
                



            </div>
            <div className="flex flex-col text-neutral-600 dark:text-gray-500 text-xl sm:text-3xl mb-3 wrap-break-word w-full lg:w-1/2 p-5">
                <div className="flex p-5 justify-center w-auto h-100">
                    <img src={grad} className="rounded-2xl lg:rotate-355" />
                </div>


                <div className="flex flex-col space-y-4 pt-4">
                        
                        <a href="https://github.com/rwprange1" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                          <IoLogoGithub size="1.2em" />
                          <text> View some projects! </text>
                          
                        </a>
                    
                        <a href="https://www.linkedin.com/in/richard-p-38804a254" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                          <FaLinkedin size="1.2em" />
                          <text> See what I'm up to! </text>

                        </a>
                        <hr className="hidden md:flex h-px my-4 md:my-6 bg-gray-200 border dark:bg-gray-700"/>
                        <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                          <SiMinutemailer size="1.2em" />
                          <text> rprange@charlotte.edu </text>
                          
                        </a>
                </div>
               
                

            </div>


        </div>
        
    );
}

export default About;