import React from "react";
import { useState } from "react";


import ListEntry from "./ListEntry";



interface jsonObject{
    date: String,
    title: String,
    desc:String,
    link:string
};

function List(){
    
    const [listElements, setListElements] = useState([]);
    
    const obj: jsonObject[] = [
    
    {
        "date": "",
        "title": "Testing",
        "desc": "What is this",
        "link": "www.hi.com"
    },
    {
        "date": "August 5th, 2025",
        "title": "Generalised Fans vs. Triangles",
        "desc": "In this paper we evaluated the Ramsey number of a fan with 2, 3-vertex blades vs. triangles",
        "link": "https://combinatorialpress.com/um-articles/vol-123/ramsey-theory-for-a-generalized-fan-versus-triangles/"
    }
    ];


   

    
    
    return(
        <div className="rounded-2xl">
           <ul>
            {obj.map((item, index) => (
                <li key={index}>
                <ListEntry date={item.date} title={item.title} link={item.link} desc={item.desc}/>
                </li>
            ))}
            </ul>
        </div>
    )

}


export default List;