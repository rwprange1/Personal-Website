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
        <div className="hidden lg:flex relative  h-100">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%]  gap-x-12 columns-5 min-h-[500px]">
            <img src={grad} className="object-scale-down w-4/5 rounded-2xl rotate-355 max-h-[450px] " />
            <img src={wf} className="object-scale-down w-4/5 rounded-2xl max-h-[450px]" />
            <img src={maa} className=" object-scale-down w-4/5 rounded-2xl rotate-358 max-h-[450px]" />
            <img src={park} className=" object-scale-down w-4/5 rounded-2xl rotate-10 max-h-[450px]" />
            <img src={lebon} className=" object-scale-down  w-4/5 rounded-2xl rotate-359 max-h-[450px]" />
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