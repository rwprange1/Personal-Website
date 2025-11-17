import bs1 from '../../../assets/gn1.png';
import bs2 from '../../../assets/gn2.png';
import bs3 from '../../../assets/Screenshot 2025-11-16 232923.png';
import { GoArrowUpRight } from "react-icons/go";

export default function JavaGA(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> Rusty-BattleShip</h1>
            <p className='mb-7'>
                Created my first semester of my third year in my DSA class, this project implements DFS, BFS, Cycle Detection, Transitive Closure in Java

            </p>
            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={bs1} alt="" />
                <text className='self-center text-sm'>The main menu of the program, 9 was selected to show the adjacency matrix for this graph</text>
            </div>
            
            
            <p className='mb-7'>
                This project allowed me to learn to learn, and implement search algorithms in an Object Oriented. The vertex data are generics but are converted to Strings when needed. This allows users of the program to define 
                arbitrary vertex names without breaking the program.
                <br className='mb-3'/>
               
            </p>

             <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={bs2} alt="" />
                <text className='self-center text-sm'>A simple program run of all search algorithms from vertex q to n</text>
            </div>

            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={bs3} alt="" />
                <text className='self-center text-sm'>A simple program run of all search algorithms from vertex k to b</text>
            </div>


            <p>
                <button className='flex cursor-grab hover:bg-zinc-800 rounded-2xl p-2' onClick={()=> {
                    window.location.href = "https://gitfront.io/r/ricwp12/bwKiUikCwy6Q/GraphAnalyzer/"
                }}>
                    <text> View GraphAnalyzer  </text>
                    <GoArrowUpRight/>
                </button>
            </p>
            
        </div>




    );
};