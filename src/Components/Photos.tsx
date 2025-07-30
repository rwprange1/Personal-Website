import Carousel from "./Carousel";

import grad from '../assets/grad.jpg';
import wf from '../assets/wf.jpg';


function Photos(){
    return(
    <>
        {/** Displays phtotos on medium screens */}
        <div className="hidden md:flex relative h-108">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[120%] flex gap-x-12">
            <img src={grad} className="w-1/5  rounded-2xl rotate-355" />
            <img src={wf} className="w-1/5  rounded-2xl rotate-8" />
            <img src="src/assets/bl.jpg" className="w-1/5  rounded-2xl rotate-358" />
            <img src="src/assets/park.jpg" className="w-1/5  rounded-2xl rotate-10" />
            <img src="src/assets/guermo.jpg" className="w-1/5  rounded-2xl rotate-359" />
            </div>
        </div>

        {/** Displays phtotos on mobile */}
       <div className="flex-col md:hidden relative  mb-2">
            <Carousel/>
        </div>
        
        




    
    </>
    );
};

export default Photos;