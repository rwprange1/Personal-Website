import {Outlet} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import {useState} from 'react';

function Layout() {
  const [lightMode, setLightMode] = useState<boolean>(false);
  
  return (
    <div className="flex w-full  dark:bg-black bg-white">
      <div className="  dark:bg-zinc-800 min-h-lvh  w-full md:w-2/3  outline-1 outline-purple-400  items-center justify-center m-auto relative overflow-x-visible px-6">
        <main >
          <Header light={lightMode} />
          <Outlet />
          <Footer/>

        </main>
        
      </div>
    </div>    
  );
};
export default Layout;
