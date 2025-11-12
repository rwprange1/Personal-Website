import s1 from '../../../assets/shell.png';
import s2 from '../../../assets/shell1.png'
import { GoArrowUpRight } from "react-icons/go";

export default function Shell(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10 content-center'>
            
            <h1 className='dark:text-white mb-2'> A Rusty Shell</h1>
            <p className='mb-7'>
               Created in my last semester of college. This project is built in Rust, it is a simple implementation 
               of a UNIX shell. It supports basic the commands (cd, mkdir, rm, history, clear, ls, pwd, echo)

            </p>
            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={s1} alt="" />
                <text className='self-center text-sm'>A simple example of the shell being used with the built in commands</text>
            </div>
            
            
            <p className='mb-7'> This project was to learn how to work with the operating system using syscalls for 
                spawing and killing processes.
                <br className='mb-3'/>
                The program also supports piping/redirecting input, output, and stderr 
            </p>

            <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-contain" src={s2} alt="" />
                <p className='text-sm text-center mt-2'>A simple example of the shell being used to redirect and pipe processes</p>
            </div>


            <p>
                If you would like to visit and view the source code for this project it can be found on GitFront.io
                <br/>
                
                <button className='flex cursor-grab hover:bg-zinc-800 rounded-2xl p-2'>
                    <text> View Source  </text>
                    <GoArrowUpRight/>
                </button>
            </p>
            
        </div>




    );
};