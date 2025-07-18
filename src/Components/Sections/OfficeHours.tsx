import Schedule from "../Schedule";

function OfficeHours(){
    return(
        <div className="flex flex-col text-2xl">
            <div className="self-center text-white">
                <span> Office: </span> <br/>
                <text>However I am available through email and can make appointments</text>
            </div>
  
            <div className="grid grid-cols-5 mt-4  mb-4 text-gray-300">
                <div className="font-bold text-center border-1">
                    <strong>Monday</strong>
                    <Schedule/>
                </div>
                <div className="font-bold text-center border-1">
                    <strong>Tuesday</strong>
                    <Schedule/>
                </div>
                <div className="font-bold text-center border-1">
                    <strong>Wednesday</strong>
                    <Schedule/>
                </div>
                <div className="font-bold text-center border-1">
                    <strong>Thursday</strong>
                    <Schedule/>
                </div>
                <div className="font-bold text-center border-1">
                    <strong>Friday</strong>
                    <Schedule/>
                </div>
            </div>
        </div>
  
            
    );
}

export default OfficeHours;