import chess from '../../../assets/Chess.png';
import fourPC from '../../../assets/4pc.png';
import { GoArrowUpRight } from "react-icons/go";

export default function BattleShip(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> Rusty-BattleShip</h1>
            <p className='mb-7'>
                Created the first semester of my senior year in college. This project is my first in Rust and utilizes shared memory and TCP sockets.

            </p>
            <div className='mb-7'>
                <img className="rounded-t-lg  object-contain" src={chess} alt="" />
                <text className='self-center text-sm'>An instance of Rusty-BattleShip</text>
            </div>
            
            
            <p className='mb-7'> In an attempt to learn networking this project allows N-players to connect to a server and play a game of battleship.
                Player n can attack any player. The server spawns threads for each client and can concurrently update game state and notify clients using shared memory. 
                <br className='mb-3'/>
                The client has two threads one which sends messages (user commands) to the server and another that displays messages from the server (the game state).
                I am currently implementing a GUI for the client process using ICED. 
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