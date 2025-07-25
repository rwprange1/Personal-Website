
import { PiLineVertical } from "react-icons/pi";

interface jsonObject{
    date: String,
    title: String,
    desc:String,
    link:string
};




function ListEntry( props: jsonObject){

    return(

        <div className="bg-inherit rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-900  hover:outline-1  hover:outline-purple-400  p-5 flex-col  self-center">

            <div className=" text-purple-500 dark:text-purple-400   text-lg md:text-2xl flex"> 
                <PiLineVertical/>
                <text className="text-lg"> {props.date}</text>
            </div>

            <h1 className="p-2 text-black dark:text-white text-lg md:text-2xl">
                {props.title}
            </h1>
            

            <h1 className="p-2 text-gray-500  text-lg md:text-xl">{props.desc}</h1>

            <a className="p-2 text-purple-500 dark:text-purple-400 text-lg md:text-xl" href={props.link} target="_blank">View article</a>
            


        </div>



    );


}



export default ListEntry;