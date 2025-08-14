import React, { JSX } from "react";
import Chess from "./Projects/Chess";
import BattleShip from "./Projects/BattleShip";


interface SideBarProps{
    toDisplay: string,
    onClick: (s: string) => void,
}

interface MyDictionary {
      [key: string]: () => JSX.Element; // Defines a dictionary where keys are strings and values are numbers
}

const names: string[] = ["Java Chess Application", "Rust N-Player BattleShip"];


const componentsMap: MyDictionary = {
    "Java Chess Application": Chess,
    "Rust N-Player BattleShip": BattleShip
}


export default function SideBar(props: SideBarProps){

    return(
        <div className="flex space-x-4">
            <aside className="w-1/5 bg-gray-300 dark:bg-zinc-600  px-2 text-lg rounded-lg">
                <ul className="space-y-2">
                    {names.map(x => (
                        <li 
                        className="hover:bg-gray-400 rounded-lg px-2 m-2 py-2"
                        onClick={() => props.onClick(x)}>
                            {x}
                        </li>
                    ))}
                </ul>
                <button
                 onClick={() => props.onClick("")}
                 className="">Return</button>
            </aside>
            <div className="w-4/5 bg-neutral-300 dark:bg-neutral-600 rounded-lg p-2">
                {names.map(x => (
                x === props.toDisplay ? React.createElement(componentsMap[props.toDisplay]) : <></>
            ))}
            </div>        
            
            


        </div>
    );


};