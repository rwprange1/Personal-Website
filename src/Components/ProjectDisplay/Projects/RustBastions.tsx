import bs1 from '../../../assets/battleship (1).png';
import bs2 from '../../../assets/battleship (2).png';
import { GoArrowUpRight } from "react-icons/go";

export default function Bastions(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> Rusty-BattleShip</h1>
            <p className='mb-7'>
                Created the first semester of my senior year in college. This project is my first in Rust and utilizes threads, shared memory and TCP sockets.

            </p>
            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={bs1} alt="" />
                <text className='self-center text-sm'>A server has two players connected and has recieved the start command, both players used the map command on timmy</text>
            </div>
            
            
            <p className='mb-7'> In an attempt to learn networking this project allows N-players to connect to a server and play a game of battleship.
                Player n can attack any player. The server spawns threads for each client and can concurrently update game state and notify clients using shared memory. 
                <br className='mb-3'/>
                The client has two threads one which sends messages (user commands) to the server and another that displays messages from the server (the game state).
                I am currently implementing a GUI for the client process using ICED. 
            </p>

             <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={bs2} alt="" />
                <text className='self-center text-sm'>Bill fired a shot at Timmy in location (1,1) and then uses the map command to see if it was a hit, while Timmy uses the map command to see if they were hit</text>
            </div>


            <p>
                This is a private, school project as such I am not able to publicly display this repository. If you would like to see the source please email me.
            </p>
            
        </div>




    );
};