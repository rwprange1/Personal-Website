import bs1 from '../../../assets/Screenshot 2025-11-17 002450.png';
import bs2 from '../../../assets/Screenshot 2025-11-17 002509.png';
import bs3 from '../../../assets/Screenshot 2025-11-17 002952.png';

export default function Bastions(){
    return(
        <div className='text-neutral-600 dark:text-gray-400 text-lg lg:text-3xl space-y-10'>
            
            <h1 className='dark:text-white mb-2'> Rust Bastions</h1>
            <p className='mb-7'>
                This project was created in my Operating Systems class. We utilized shared memory, threads, and message passing to create a deadlock free, data-sharing world.
                
            </p>
            <h4>
                Please note the program looks like it is running linearly as the method of logging info is shared between all threads. Locking this resource causes the threads waiting to log to sleep until the logging resource is free.
            </h4>


              <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-fill " src={bs1} alt="" />
                <p className='text-sm text-center mt-2'>A simple example of the Bastions program</p>
            </div>

            
            
            
            <p className='mb-7'>  This program has three sections, a Comptroller which delivers supplies to the Depot(Shared memory with Sentinels). On delivery it uses message passing to notify
                the Sentinels to pick up the resources. The sentinels then need to pick up the supplies from the depot and deliver them to the Bastions.
                
                  <br className='mb-3'/>
                The Bastions and Comptroller share a one way message channel. The Comptroller thread sleeps untill pinged by a Bastion. There are three bastions, Coralshrimp, Dragoncrystal, and Dashjuice. Each bastion needs the two resources it does not have.
                <br className='mb-3'/>
                The Bastions will notify the Comptroller when they need supplies waking the thread. The Comptroller then selects two of the three resources and "delivers" them to the supply depot. On delivery the Comptroller sends a message to 
                the sentinels.
                <br className='mb-3'/>
                There are three sentinels, each picks up a specific resource from the supply depot then they check to see if the other sentinels have stashed their resource(Sentinels share memory with each other and Bastions). If so the sentinel grabs the resource and delivers it to the corresponding Bastion. If the stash is empty the Senteniel drops it off and sleeps.
                <br className='mb-3'/>
                Once a Bastion has recieved a package in the Stash from the Sentinel a message is sent to wake it. It then recives the package and selects a random integer of time to take disributing the resources. After it is done distributing it will send a message to the Comptroller that it needs supplies and the cycle continues.

            </p>

             <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-fill " src={bs2} alt="" />
                <p className='text-sm text-center mt-2'>A simple example of the Bastions program</p>
            </div>

            <div className='mb-7 flex flex-col items-center justify-center content-center'>
                <img className="rounded-lg object-fill " src={bs3} alt="" />
                <p className='text-sm text-center mt-2'>A simple example of the Bastions program</p>
            </div>

            <p>
                This is a private, school project as such I am not able to publicly display this repository. If you would like to see the source please email me.
            </p>
            
        </div>




    );
};