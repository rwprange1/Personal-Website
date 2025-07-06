import React from "react";
import { PiLineVertical } from "react-icons/pi";

interface jsonObject{
    date: String,
    title: String,
    desc:String,
    link:string
};




function ListEntry( props: jsonObject){

    return(

        <div className="bg-inherit rounded-2xl hover:bg-zinc-800 p-5 flex-col w-2/3 self-center">

            <div className="text-purple-400 text-2xl flex"> 
                <PiLineVertical/>
                <text className="text-lg"> {props.date}</text>
            </div>

            <h1 className="p-2 text-white text-2xl">
                {props.title}
            </h1>
            

            <h1 className="p-2 text-gray-300 text-xl">{props.desc}</h1>

            <a className="p-2 text-purple-400 text-lg" href={props.link} target="_blank">View article</a>
            


        </div>



    );


}



export default ListEntry;