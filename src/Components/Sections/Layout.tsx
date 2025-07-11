import {Outlet} from 'react-router-dom';
import Header from '../Header';
import {useState} from 'react';



function Layout() {

  const [lightMode, setLightMode] = useState<boolean>(false);



  return (
      <div className="bg-zinc-800  w-full md:w-2/3  outline-1 outline-purple-400 min-h-lvh items-center justify-center m-auto relative overflow-x-visible px-6">
        <main >
          <Header light={lightMode} />
          <Outlet />

        </main>
        
      </div>
        
          
        

        
    
  );
}

export default Layout;
