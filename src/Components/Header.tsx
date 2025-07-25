import { IoMoonOutline } from "react-icons/io5";
import { AiFillSun } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {NavLink } from "react-router-dom";
import { useState,useEffect } from "react";



export default function Header() {
     const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Initial check from DOM
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    console.log("UPDATING VALUE");
    console.log('HTML classes:', document.documentElement.className);
    // Sync the HTML class with state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]); // Only run when darkMode changes

  const toggle = () => {
    console.log("Toggle called")
    setDarkMode(prev => !prev); // Flip the state, effect will handle DOM
  };

   

  return (
    <nav>
      {/** Large to medium size screens */}
    <div className="hidden md:flex flex-row items-center justify-between pt-4 pb-4">
       

       <NavLink to="/" className="rounded-full  bg-white text-teal-400 dark:bg-zinc-50 dark:text-white hover:outline-1/2 hover:outline-purple-400">
          <img className="w-10 h-10 rounded-full" src="null" alt="avatar"/> 
       </NavLink>
      
              

  {/* Center header */}
  <div className="grow flex justify-center mb-2">
    <header className="flex min-w-xs justify-center bg-inherit border-1 border-gray-300 dark:border-none dark:bg-zinc-700 rounded-full  lg:w-1/2 w-4/10  text-sm xl:text-md text-neutral-600 dark:text-white">
      <NavLink
        to="/about"
        className="relative p-3 cursor-pointer hover:text-purple-400  "
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            About

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>


      <NavLink to="/research" className=" relative p-3 cursor-pointer hover:text-purple-400"
      
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            Research

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>
      <NavLink to="/projects" className=" relative p-3 cursor-pointer hover:text-purple-400"
      
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            Projects

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>
      <NavLink to="/contact" className=" relative p-3 cursor-pointer hover:text-purple-400 "
      
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            Contact

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>
      <NavLink to="/hours" className=" relative p-3 cursor-pointer hover:text-purple-400"
      
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            Schedule

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>

      <NavLink to="/games" className=" relative p-3 cursor-pointer hover:text-purple-400"
      
      >
        {({ isActive }) => (
          <span className="relative inline-block">
            Games

            {isActive && (
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 h-0.5 w-12 bg-linear-to-r from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/60 dark:to-purple-400/0"></span>
            )}
          </span>
        )}
      </NavLink>
    </header>
    </div>
      {/* Right button with margin from wall */}
      <button 
      className="rounded-full border-1 border-gray-300 dark:border-none bg-white dark:bg-zinc-700 dark:hover:bg-zinc-900 p-3 dark:text-white hover:outline-1 hover:outline-purple-400 px-2 py-1" 
      onClick={toggle}
      >
        {darkMode ?
            <AiFillSun color="yellow" size="1.2em" /> :
            < IoMoonOutline size="1.2em" />
        }
      </button>
    </div>

    {/** Mobile*/}
    <div className="md:hidden flex place-content-end py-2 space-x-3">
      <div className="flex space-x-0.5">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white text-neutrak-600 dark:bg-zinc-700 px-3 py-2 text-sm font-semibold dark:text-white dark:hover:bg-zinc-900 hover:outline-1 hover:outline-purple-400">
              Menu
              <IoIosArrowDown/>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 "
          >
            <div className="py-1">
              <MenuItem>
                 <NavLink to="/" className="rounded-full bg-white text-teal-400 dark:bg-zinc-50 dark:text-white hover:outline-1/2 hover:outline-purple-400">
                    <img className="w-10 h-10 rounded-full" src="null" alt="avatar"/> 
                  </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/about"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  About
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/research"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Research
                </NavLink>
              </MenuItem>
              <MenuItem>
               <NavLink
                  to="/projects"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Projects
                </NavLink>
              </MenuItem>
                
              <MenuItem>
                <NavLink
                  to="/contact"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Contact
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/hours"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Schedule
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/hours"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Games
                </NavLink>
              </MenuItem>
                
            </div>
          </MenuItems>
        </Menu>
        
      </div>
        {/* Right button with margin from wall */}
       
 
      <button 
        className="rounded-full border-1 border-gray-300 dark:border-none bg-white dark:bg-zinc-700 dark:hover:bg-zinc-900 p-3 dark:text-white hover:outline-1 hover:outline-purple-400 px-2 py-1" 
        onClick={toggle}
      >
        {darkMode ?
          <AiFillSun color="yellow" size="1.2em" /> :
          < IoMoonOutline size="1.2em" />
        }
      </button>
      </div>
  


  </nav>

   
 
  
  )
}

