import wbf1 from '../../../assets/wbf1 (1).png';
import wbf2 from '../../../assets/wbf1 (2).png';
import { GoArrowUpRight } from "react-icons/go";

export default function WheeBFit(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10 m-2'>
            
            <h1 className='dark:text-white mb-2'> WheeBFit</h1>
            <p className='mb-7'>
                As my senior capstone this project spent a year and some change in development. This project is a full stack we application built for the education 
                of K-5 students. 

            </p>
            <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={wbf1} alt="" />
                <text className='self-center text-sm'>A student account which has logs for 2 days</text>
            </div>
            
            
            <p className='mb-5'>The front end was built using TypeScript, ReactJS and TailwindCSS. It was built for a client. The user interface was reimplemented in React but the 
                original design came from the original iOS version of the application. 
                <br className='mb-3'/>
                The backend is built on ExpressJS and MySQL and is hosted on Heroku in a Docker container. We designed, implemented and tested custom application programming interfaces (API)  which 
                allows the frontend to preform a wide range of CRUD operations. 
            </p>

             <div className='mb-7'>
                <img className="rounded-lg  object-contain" src={wbf2} alt="" />
                <text className='self-center text-sm'>A simple teacher account, with a single class and one student in that class</text>
            </div>


            <p>
                
                
                <button className='flex cursor-grab hover:bg-zinc-800 rounded-2xl p-2' onClick={()=> {
                    window.location.href = "https://www.wheebfit.com"
                }}>
                    <text> View WheeBFit.com  </text>
                    <GoArrowUpRight/>
                </button>
            </p>
            
        </div>




    );
};