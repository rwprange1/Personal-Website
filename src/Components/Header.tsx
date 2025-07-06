
import { LuMoonStar } from "react-icons/lu";

interface headerProps{
  light: boolean;
}

export default function Header(props: headerProps) {
 
  console.log(props.light);

  return (
    <div className="flex justify-between items-center px-6 pb-0.5">

  {/* Left button with margin from wall */}
  <button className="rounded-full bg-zinc-800 hover:bg-zinc-900 p-3 text-white hover:outline-1 hover:outline-purple-400">
    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>
  </button>

  {/* Center header */}
  <header className="flex justify-center bg-zinc-800 rounded-full outline-purple-400 outline-1 w-1/3 mx-auto">
    <button className="p-3 cursor-pointer text-white hover:text-purple-400">About</button>
    <button className="p-3 cursor-pointer text-white hover:text-purple-400">Research</button>
    <button className="p-3 cursor-pointer text-white hover:text-purple-400">Projects</button>
    <button className="p-3 cursor-pointer text-white hover:text-purple-400">Contact</button>
  </header>

  {/* Right button with margin from wall */}
  <button className="rounded-full bg-zinc-800 hover:bg-zinc-900 p-3 text-white  hover:outline-1 hover:outline-purple-400">
    <LuMoonStar size="2em" />
  </button>

</div>

   
 
  
  )
}

