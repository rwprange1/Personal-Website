
import {NavLink } from "react-router-dom";

function Footer(){
    return(
       

    <footer className="bg-inherit dark:shadow-sm  dark:bg-zinc-800 mt-2 mb-2 ">
        <hr className="-translate-x-1/62 mt-2 w-[103.3%] px-0 p-0 border-purple-400 bg-purple-400"/>
        <div className="w-full mx-auto max-w-(--breakpoint-xl) p-3 md:flex md:items-center md:justify-between">

            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025
                <a href="/" className="hover:underline"> Richard Prange™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <NavLink to="/about" className="hover:underline me-4 md:me-6">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="hover:underline me-4 md:me-6">Contact</NavLink>
                </li>
            </ul>
        </div>
    </footer>

    );

}



export default Footer;