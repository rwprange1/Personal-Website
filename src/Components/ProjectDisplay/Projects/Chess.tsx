import chess from '../../../assets/Chess.png';
import fourPC from '../../../assets/4pc.png';
import { GoArrowUpRight } from "react-icons/go";

export default function Chess(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> Chess Meister</h1>
            <p className='mb-7'>
                Created the second semester of my junior year in my Software Engineering class.
                I worked with 2 teamates and in 3 short sprints we were able to implement a 
                very functional Chess application using Java. 

            </p>
            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={chess} alt="" />
                <text className='self-center text-sm'>A two player game of Chess in ChessMeister</text>
            </div>
            
            
            <p className='mb-5'>The main focus of this project was the core functionality of traditional Chess. 
                It took two sprints, but we were able to fully implement traditional chess through the command line.
                <br className='mb-3'/>
                In sprint three we added a graphical user inerface using JavaFX and were able to 
                fully implement a version of four-player chess. Which supports two modes anihiliate and assimilate.
                There is no check or checkmates in this version as to win you need to capture your opponents king.
            </p>

             <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={fourPC} alt="" />
                <text className='self-center text-sm'>A four player game of Chess in ChessMeister</text>
            </div>


            <p>
                <button className='flex cursor-grab hover:bg-zinc-800 rounded-2xl p-2' onClick={()=> {
                    window.location.href = "https://gitfront.io/r/ricwp12/qsDUvfM56CWG/ChessMeisterV2/"
                }}>
                    <text> View ChessMeister </text>
                    <GoArrowUpRight/>
                </button>
            </p>
            
        </div>




    );
};