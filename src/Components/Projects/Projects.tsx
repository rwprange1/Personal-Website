import {useState} from 'react';
import ProjectElement from "./ProjectElement";
import { BsChevronDoubleRight,BsChevronDoubleLeft } from "react-icons/bs";

interface jsonObject{
    title: string,
    desc: string,
    link: string,
    img: string,
}


function Projects(){
    const CHESS: number = 0;
    const BATTLE_SHIP : number = 1;
    const WHEE_B_FIT : number = 2;
    const RUSTY_SHELL: number = 3;
    const BASTIONS : number = 4;
    const BALLS_LAUNCH : number = 5;
    const BALLS_STATIC : number = 6;
    const GANAL: number = 7;
    const obj: jsonObject[] = [
    
   
    {
        "img": "src/assets/Chess.png",
        "title": "Java Chess Application",
        "desc": "A 2 and 4 player implementation of Chess utilizing JavaFX to provide users with the ability to play " +
        "on the command line or through a graphical interface",
        "link": "",
   
    },
    {
        "img": "src/assets/bs.png",
        "title": "Rust N-Player BattleShip",
        "desc": "A N-Player BattleShip game, which utilizes threads and shared memory to allow N-players to connect to " + 
        "a server and continously send and recieve data (art from: https://www.pixilart.com/art/battle-burdened-battle-hardened-sr2095a57b5ecaws3?ft=tags&ft_id=)",
        "link": "",

    },
    {
        "img": "src/assets/wbf.png",
        "title": "WheeBFit a Full Stack Web Application",
        "desc": "An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing " +
        "Express, React, and Tailwind. Containerized using Docker and deployed on Heroku",
        "link": "",
 
    },
    {
        "img": "src/assets/rustacean-flat-happy.png",
        "title": "A Rusty Shell",
        "desc": "In immitation of a unix-shell built in rust utilizing syscalls",
        "link": "",

    },
    {
        "img": "src/assets/castle.jpg",
        "title": "Rust Bastions",
        "desc": "A rust programs which models a central command sending and recieving resources from 3 outposts(bastions) " +
        "this program utilizes threading and shared memory to produce, distribute, and transport goods between command and bastions",
        "link": "",

    },
     {
        "img": "src/assets/ballsv2g.gif",
        "title": "C++ Balls :)",
        "desc": "A simple C++ and SFML program which spawns balls and launches them then detects and corrects collisions (frictionless)",
        "link": "",

    },
     {
        "img": "src/assets/push.gif",
        "title": "C++ Balls :)",
        "desc": "A simple C++ and SFML program which spawns static moveable then detects and corrects collisions",
        "link": "",

    },
     {
        "img": "src/assets/graph.png",
        "title": "Java Graph Analyzer",
        "desc": "A Java application which allows a user to traverse a graph",
        "link": "",

    },
    

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
   
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? obj.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === obj.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const goToSlide = (index: number) => {
        setCurrentIndex(index);
      };
    


    return(
        <>
        <div className='hidden xl:block' >

            <h1 className='rounded-full  justify-center  flex space-x-3 text-4xl mb-5 text-gray-500 '>
                <text> Featured Projects  </text>
            </h1>

            <div className="flex space-x-10 columns-3 mb-5">
                {/** Chess */}
                <ProjectElement data={obj[CHESS]}/>
                {/** BattleShip */}
                <ProjectElement data={obj[BATTLE_SHIP]} />
                {/** WheeBFit */}
                <ProjectElement data={obj[WHEE_B_FIT]} />
            </div>
            <div className="flex space-x-10 justify-center mb-5">
                {/** Rusty Shell */}
                <ProjectElement data={obj[RUSTY_SHELL]} />
                {/** Rusty Bastion */}
                <ProjectElement data={obj[BASTIONS]} />
            </div>

            <div className="flex space-x-10 columns-3 mb-5">
                {/** C++ Balls */}
                <ProjectElement data={obj[BALLS_LAUNCH]}/>
                {/** C++ Balls */}
                <ProjectElement data={obj[BALLS_STATIC]} />
                {/** GANAL */}
                <ProjectElement data={obj[GANAL]} />
            </div>


            
        </div>
        
        <div className='visible xl:hidden'>
            <div className="">
                  <div className="overflow-hidden rounded-lg justify-centerr">
                    <ProjectElement
                            data={obj[currentIndex]}
                    />
                  </div>
            
                  <div className='flex-row -translate-y-40'>
                     {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute  left-1 -translate-y-1/2  bg-purple-400 hover:bg-purple-500 dark:bg-white/80 dark:hover:bg-white px-2 py-1 rounded-full shadow cursor-pointer"
                        >
                            <BsChevronDoubleLeft />
                        </button>
            
                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute  right-1   -translate-y-1/2 bg-purple-400 hover:bg-purple-500 dark:bg-white/80 dark:hover:bg-white px-2 py-1 rounded-full shadow cursor-pointer"
                        >
                            <BsChevronDoubleRight />
                        </button>
            
                  </div>
            
                 
            
                  {/* Dots Indicator */}
                  <div className="flex justify-center py-1 space-x-2">
                    {obj.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-colors duration-300 cursor-pointer ${
                          index === currentIndex ? 'bg-purple-500 dark:bg-purple-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

        </div>
        
        
        </>
        
    );
}

export default Projects