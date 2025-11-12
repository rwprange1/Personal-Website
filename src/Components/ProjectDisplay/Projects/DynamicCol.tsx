import bs1 from '../../../assets/balls1.png';
import bs2 from '../../../assets/ballsv2g.gif';
import { GoArrowUpRight } from "react-icons/go";

export default function DynamicCol(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> C++ Dynamic Collisions</h1>
            <p className='mb-7'>
                A simple project using C++ and SFML it renders several moving balls. These balls all have a random velocity, 
                on collision with another ball or the wall we resolve the collision and change its velocity

            </p>
            <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-contain" src={bs2} alt="" />
                <p className='text-sm text-center mt-2'>The program running</p>
            </div>

            
            
            <p className='mb-7'> This project was just to get familiar with C++ syntax and dynamically loading and linking libraries 
                <br className='mb-3'/>
                This program is not very performant, it can only handle about 200 balls, the collision detection algorithm has time complexity of O(n<sup>2</sup>) and runs every frame.
            </p>

             <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-contain" src={bs1} alt="" />
                <p className='text-sm text-center mt-2'>A screenshot of the program running</p>
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