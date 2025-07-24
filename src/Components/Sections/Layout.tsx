import {Outlet} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';


function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full dark:bg-black bg-stone-100">
      <div className="flex-grow bg-white  dark:bg-zinc-800 w-full md:w-2/3 dark:outline-1 dark:outline-purple-400 m-auto px-6">
        <main>
        
          <Header />
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Layout;
