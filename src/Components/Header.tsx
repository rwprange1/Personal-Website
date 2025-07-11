
import { LuMoonStar } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface headerProps{
  light: boolean;
}

export default function Header(props: headerProps) {
 
  console.log(props.light);

  return (
    <nav>
      {/** Large to medium size screens */}
    <div className="hidden md:flex flex-row items-center justify-between pb-0.5">
       
      <a className="rounded-full bg-zinc-50 text-white hover:outline-1 hover:outline-purple-400" href="/">
        <img className="w-10 h-10 rounded-full" src="" alt="avatar"/> 
      </a>
              

  {/* Center header */}
  <div className="flex-grow flex justify-center py-2">
    <header className="flex min-w-xs justify-center bg-zinc-700 rounded-full outline-purple-400 outline-1 lg:w-1/2 w-4/10  xl:text-lg">
      <a href="/about" className="p-3 cursor-pointer text-white hover:text-purple-400">About</a>
      <a className="p-3 cursor-pointer text-white hover:text-purple-400">Research</a>
      <a className="p-3 cursor-pointer text-white hover:text-purple-400">Projects</a>
      <a className="p-3 cursor-pointer text-white hover:text-purple-400">Contact</a>
    </header>
  </div>

  {/* Right button with margin from wall */}
  <button className="rounded-full bg-zinc-700 hover:bg-zinc-900 p-3 text-white hover:outline-1 hover:outline-purple-400 px-3 py-1">
    <LuMoonStar size="2em" />
  </button>

</div>

    {/** Mobile*/}
    <div className="md:hidden flex place-content-end py-2 space-x-3">
      <div className="flex space-x-0.5">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full  bg-zinc-700 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-900 hover:outline-1 hover:outline-purple-400">
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
                <button className="rounded-full bg-zinc-50 text-white hover:outline-1 hover:outline-purple-400">
                  <img className="w-10 h-10 rounded-full" src="" alt="avatar"/> 
                </button>
              </MenuItem>

              <MenuItem>
                <a
                  href="#"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  About
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Research
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Projects
                </a>
              </MenuItem>
                
              <MenuItem>
                <a
                  href="#"
                  className="rounded-md block px-4 py-1 text-sm text-white data-focus:bg-zinc-900"
                >
                  Contact
                </a>
              </MenuItem>
                
            </div>
          </MenuItems>
        </Menu>
        
      </div>
        {/* Right button with margin from wall */}
        <button className="rounded-full space-x-0.5 bg-zinc-700 hover:bg-zinc-900 p-2 text-gray-400 hover:outline-1 hover:outline-purple-400 px-4 py-1">
          <LuMoonStar size="1.7em" />
        </button>
    </div>
  


  </nav>

   
 
  
  )
}

