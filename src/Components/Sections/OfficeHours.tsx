import Schedule from "../Schedule";



function OfficeHours(){
    const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9AM–7PM
    const formatHour = (hour: number) => {
        if (!hour){
            return "7:00 PM"
        }
        const period = hour >= 12 ? 'PM' : 'AM';
        const formatted = hour > 12 ? hour - 12 : hour;
        return `${formatted}:00 ${period}`;
    };

    let hoursStr = [];
    for (let i = 0; i < hours.length; i++){
        hoursStr.push(formatHour(hours[i]) + " - " + formatHour(hours[i+1]))
    }

    const schedule = {
        "Monday": ["","","", "Comp Graphics", "", "", ""],
        "Tuesday": ["","210 Lab","211 Lab", "Analysis 1", "", "", "App Prop 1"],
        "Wednesday": ["","","", "Comp Graphics", "", "", ""],
        "Thursday": ["","143 Lab","", "Analysis 1", "", "", "App Prop 1","","", "605 Lab"],
        "Friday": ["", "", "","","", "","","",""],
        "Hours": hoursStr
    }

    return(
        <div className="flex flex-col text-2xl">
            <div className="self-center text-black dark:text-white">
                <span> Office: </span> <br/>
                <text>However I am available through email and can make appointments</text>
            </div>
  
            <div className="grid grid-cols-6 mt-4 text-lg md:text-xl mb-4 text-neutral-600 dark:text-gray-300 border">
                <div className="font-bold text-center border">
                    <strong>Hours</strong>
                    <Schedule list={schedule["Hours"]}/>
                </div>
                <div className="font-bold text-center border">
                    <strong>Monday</strong>
                    <Schedule list={schedule["Monday"]}/>
                </div>
                <div className="font-bold text-center border">
                    <strong>Tuesday</strong>
                    <Schedule list={schedule["Tuesday"]}/>
                </div>
                <div className="font-bold text-center border">
                    <strong>Wednesday</strong>
                    <Schedule list={schedule["Wednesday"]}/>
                </div>
                <div className="font-bold text-center border">
                    <strong>Thursday</strong>
                    <Schedule list={schedule["Thursday"]}/>
                </div>
                <div className="font-bold text-center border">
                    <strong>Friday</strong>
                    <Schedule list={schedule["Friday"]}/>
                </div>
            </div>
        </div>
  
            
    );
}

export default OfficeHours;