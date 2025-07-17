

function Projects(){
    return(
        <div >

            <h1 className='rounded-full  justify-center  flex space-x-3 text-4xl mb-5 text-gray-300 '>
                <text> Featured Projects  </text>
            </h1>

            <div className="flex space-x-10 columns-3 mb-5">
                
            {/** Chess */}
            <div className="max-w-sm h-[500px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/Chess.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               Java Chess Application
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            A 2 and 4 player implementation of Chess utilizing JavaFX to provide users with the ability to play 
                            on the command line or through a graphical interface
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

              {/** BattleShip */}
            <div className="max-w-sm h-[500px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/BS.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               Rust N-Player BattleShip
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            A N-Player BattleShip game, which utilizes threads and shared memory to allow N-players to connect to 
                            a server and continously send and recieve data, while others take their turns
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            
              {/** WheeBFit */}
            <div className="max-w-sm h-[500px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               WheeBFit a Full Stack Web Application
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

             






            </div>

            <div className="flex space-x-10 justify-center mb-5">
            
            
            {/** Rusty Shell */}
            <div className="max-w-sm h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               A Rusty Shell
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/** Rusty Bastion */}
            <div className="max-w-sm h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Rust Bastions
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>




            </div>

            <div className="flex space-x-10 columns-3 mb-5">
                {/** C++ Balls */}
            <div className="max-w-sm h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Rust Bastions
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>



            {/** C++ Balls */}
            <div className="max-w-sm h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                C++ Random Primitive Collisions 
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/** C++ Balls */}
            <div className="max-w-sm h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[225px] w-full object-cover" src="src/assets/wbf.png" alt="" />
                </a>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                C++ Draggable Primitive Collisions 
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            An educational fitness and nutrition app for educators and students. Developed in TypeScript, utilizing Express, React, and Tailwind. Containerized using Docker and deployed on Heroku
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>



            </div>


            
        </div>
    );
}

export default Projects