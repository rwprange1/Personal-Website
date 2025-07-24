import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function getInTouch(){

    return(
        <div className="flex flex-col lg:flex-row pt-5 pb-0 gap-8 h-[83vh]">
            <div className="flex flex-col text-3xl text-gray-300 break-words w-full lg:w-1/2 outline-2 outline-zinc-700 rounded-2xl p-2 h-1/2">
                <strong>If you would like to contact me or follow me on socials please do!</strong> <br/>
                <text className="text-2xl mt-5"> I plan to be fairly active on LinkedIn and GitHub while continuing to update this website with new projects and updates</text>
            </div>
            <div className="flex flex-col text-3xl text-gray-300 break-words w-full lg:w-1/2 outline-2 outline-zinc-700 rounded-2xl p-2 h-1/2">
                <div className="flex flex-col space-y-4 pt-4">
                    <a href="https://github.com/rwprange1" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                        <IoLogoGithub size="1.2em" />
                        <text> View some projects! </text>
                    </a>
                
                    <a href="https://www.linkedin.com/in/richard-p-38804a254" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                        <FaLinkedin size="1.2em" />
                        <text> See what I'm up to! </text>
                    </a>

                    <a href="https://www.youtube.com/@richardp2545" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                        <FaYoutube size="1.2em" />
                        <text> Helpful Videos </text>
                    </a>
                </div>
                <div >
                    <hr className="h-px my-4 bg-gray-200 border dark:bg-gray-700"/>
                    <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                            <SiMinutemailer size="1.2em" />
                            <text> rprange@charlotte.edu </text>
                            
                        </a>
                </div>
            </div>
                
            
      </div>

    );


}

export default getInTouch;