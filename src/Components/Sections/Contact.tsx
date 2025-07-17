import { SiMinutemailer } from "react-icons/si";

function getInTouch(){

    return(
        <div className="flex flex-col lg:flex-row space-x-3 h-full">
            <div className=" p-2 flex w-1/3 rounded-2xl bg-zinc-700 mr-10">
                <h1>
                    Get in touch
                </h1>
                <span>
                    If you would like to contact me please use one of the following
                </span>

            </div>

            <div className=" p-2 flex-col w-1/3 rounded-2xl bg-zinc-700 ">
                <div className=" flex-col">
                    <h2> Collab on math research</h2>
                    <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                                              <SiMinutemailer size="1.2em" />
                                              <text> rprange@charlotte.edu </text>
                                              
                                            </a>
                </div>
                 <div className=" flex-col">
                    <h2> Collab on cs research</h2>
                    <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                                              <SiMinutemailer size="1.2em" />
                                              <text> rprange@charlotte.edu </text>
                                              
                                            </a>
                </div>


            
            </div>

             <div className=" p-2 flex-col w-1/3 rounded-2xl bg-zinc-700 ">
                <div className=" flex-col">
                    <h2> Collab on math research</h2>
                    <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                                              <SiMinutemailer size="1.2em" />
                                              <text> rprange@charlotte.edu </text>
                                              
                                            </a>
                </div>
                 <div className=" flex-col">
                    <h2> Collab on cs research</h2>
                    <a href="mailto:rprange@charlotte.edu" target='_blank' className='rounded-full flex space-x-3 text-xl hover:text-purple-400'>
                                              <SiMinutemailer size="1.2em" />
                                              <text> rprange@charlotte.edu </text>
                                              
                                            </a>
                </div>


            
            </div>




        </div>


    );


}

export default getInTouch;