import ProjectElement from "./ProjectElement";


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


    return(
        <div >

            <h1 className='rounded-full  justify-center  flex space-x-3 text-4xl mb-5 text-gray-300 '>
                <text> Featured Projects  </text>
            </h1>

            <div className="flex space-x-10 columns-3 mb-5">
                {/** Chess */}
                <ProjectElement title={obj[CHESS].title} img={obj[CHESS].img} desc={obj[CHESS].desc}  link={obj[CHESS].link}/>
                {/** BattleShip */}
                <ProjectElement title={obj[BATTLE_SHIP].title} img={obj[BATTLE_SHIP].img} desc={obj[BATTLE_SHIP].desc}  link={obj[BATTLE_SHIP].link}/>
                {/** WheeBFit */}
                <ProjectElement title={obj[WHEE_B_FIT].title} img={obj[WHEE_B_FIT].img} desc={obj[WHEE_B_FIT].desc}  link={obj[WHEE_B_FIT].link}/>
            </div>
            <div className="flex space-x-10 justify-center mb-5">
                {/** Rusty Shell */}
                <ProjectElement title={obj[RUSTY_SHELL].title} img={obj[RUSTY_SHELL].img} desc={obj[RUSTY_SHELL].desc}  link={obj[RUSTY_SHELL].link}/>
                {/** Rusty Bastion */}
                <ProjectElement title={obj[BASTIONS].title} img={obj[BASTIONS].img} desc={obj[BASTIONS].desc}  link={obj[BASTIONS].link}/>
            </div>

            <div className="flex space-x-10 columns-3 mb-5">
                {/** C++ Balls */}
                <ProjectElement title={obj[BALLS_LAUNCH].title} img={obj[BALLS_LAUNCH].img} desc={obj[BALLS_LAUNCH].desc}  link={obj[BALLS_LAUNCH].link}/>
                {/** C++ Balls */}
                <ProjectElement title={obj[BALLS_STATIC].title} img={obj[BALLS_STATIC].img} desc={obj[BALLS_STATIC].desc}  link={obj[BALLS_STATIC].link}/>
                {/** C++ Balls */}
                <ProjectElement title={obj[GANAL].title} img={obj[GANAL].img} desc={obj[GANAL].desc}  link={obj[GANAL].link}/>
            </div>


            
        </div>
    );
}

export default Projects