import React, { JSX } from "react";
import Chess from "./Projects/Chess";
import BattleShip from "./Projects/BattleShip";
import WheeBFit from "./Projects/WheeBFit";
import { MdMenuOpen } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface SideBarProps{
    toDisplay: string,
    onClick: (s: string) => void,
}

interface MyDictionary {
      [key: string]: () => JSX.Element; // Defines a dictionary where keys are strings and values are numbers
}

const names: string[] = ["Java Chess Application", "Rust N-Player BattleShip", "WheeBFit a Full Stack Web Application"];


const componentsMap: MyDictionary = {
    "Java Chess Application": Chess,
    "Rust N-Player BattleShip": BattleShip,
    "WheeBFit a Full Stack Web Application": WheeBFit,
}


export default function SideBar(props: SideBarProps){

    return(
        <div>
            <h1 className="text-center w-full  text-4xl text-neutral-600 dark:text-gray-500 mb-5">Projects</h1>
            <div className="flex space-x-4 text-neutral-600 dark:text-gray-500">
                <aside className="md:w-1/5 z-1">
                    <div className="visible md:h-0 md:w-0 md:collapse start-0 top-0 text-4xl w-2/3">
                        <div className="space-x-0.5">
                            <Menu as="div" className="relative block w-2/3">
                                
                                <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-full bg-white text-neutrak-600 dark:bg-zinc-700 px-3 py-2  font-semibold dark:text-white dark:hover:bg-zinc-900 hover:outline-1 hover:outline-purple-400 text-3xl">
                                    <MdMenuOpen/>
                                </MenuButton>
                                

                                <MenuItems
                                    transition
                                    className="z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-700"
                                >
                                <div className="py-1 text-xl block list-none">
                                    {names.map(x => (
                                    <li 
                                    className="hover:bg-gray-400 rounded-lg px-2 m-2 py-2"
                                    onClick={() => props.onClick(x)}>
                                        {x}
                                    </li>
                                ))}
                                <button
                        onClick={() => props.onClick("")}
                        className="hover:bg-gray-400 rounded-lg px-2 m-2 py-2 w-9/10 self-start">Return</button>
                                </div>
                                </MenuItems>
                            </Menu>
                        </div>
                        
                    </div>

                    <div className="md:w-full w-0 invisible md:visible bg-gray-300 dark:bg-zinc-600 px-2 text-lg rounded-lg top-0 py-1">
                        <ul className="space-y-2 w-full">
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
                    className="hover:bg-gray-400 rounded-lg px-2 m-2 py-2 w-9/10 self-start">Return</button>
                    </div>
                
                </aside>
            <div className="w-4/5 bg-white dark:bg-zinc-900 shadow-md border-gray-200 dark:border-gray-600 rounded-lg p-4">
                {names.map(x => (
                x === props.toDisplay ? React.createElement(componentsMap[props.toDisplay]) : <></>
            ))}
            </div> 
            </div>
            
            
                  
        </div>
    );


};