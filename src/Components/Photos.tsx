import Carousel from "./Carousel";

import grad from '../assets/grad.jpg';
import wf from '../assets/wf.jpg';
import maa from '../assets/maa.jpg'
import park from '../assets/park.jpg'
import lebon from '../assets/lebon.jpg'


function Photos(){
    return(
    <>
        {/** Displays phtotos on medium screens */}
        <div className="hidden lg:flex relative h-108">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%] flex gap-x-12 columns-5">
            <img src={grad} className="w-full h-auto  rounded-2xl rotate-355" />
            <img src={wf} className="w-full h-auto rounded-2xl rotate-8" />
            <img src={maa} className="w-full h-auto  rounded-2xl rotate-358" />
            <img src={park} className="w-full h-auto  rounded-2xl rotate-10" />
            <img src={lebon} className="w-full h-auto  rounded-2xl rotate-359" />
            </div>
        </div>

        {/** Displays phtotos on mobile */}
       <div className="flex-col lg:hidden relative  mb-2">
            <Carousel/>
        </div>
        
        




    
    </>
    );
};

export default Photos;