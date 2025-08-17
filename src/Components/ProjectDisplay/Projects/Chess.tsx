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
                very functional chess application using Java. 

            </p>
            <div className='mb-7'>
                <img className="rounded-t-lg  object-contain" src={chess} alt="" />
                <text className='self-center text-sm'>A two player game of Chess in ChessMeister</text>
            </div>
            
            
            <p className='mb-3'>The main focus of this project was the core functionality of two player chess. 
                In sprints one and two were able to fully implement check, checkmate, en-passaunt, castling
                through the command line interface. 
                <br className='mb-3'/>
                We were also able to fully implement a version of four-player chess with two modes anihiliate and assimilate.
                There is no check or checkmates in this version as to win you need to capture your opponents king.
            </p>

             <div className='mb-7'>
                <img className="rounded-t-lg  object-contain" src={fourPC} alt="" />
                <text className='self-center text-sm'>A four player game of Chess in ChessMeister</text>
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