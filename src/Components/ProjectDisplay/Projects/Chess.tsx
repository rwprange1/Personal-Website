import chess from '../../../assets/Chess.png';

export default function Chess(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl'>
            
            <h1 className='dark:text-white mb-2'> Chess Meister</h1>
            <p className='mb-3'>
                Created the first semester of my junior year in my Software Engineering class.
                I worked with 2 teamates and in 3 short sprints we were able to implement a 
                very functional chess application. 

            </p>
            <img className="rounded-t-lg  object-contain className='mb-3'" src={chess} alt="" />
            
            <p className='mb-3'>The main focus of this project was the core functionality of two player chess. 
                In sprints one and two were able to fully implement check, checkmate, en-passaunt, castling
                through the command line interface. 
                <br className='mb-3'/>
                We were also able to fully implement a version of four-player chess with two modes anihiliate and assimilate.
                There is no check or checkmates in this version as to win you need to capture your opponents king.
            </p>



        </div>




    );
};