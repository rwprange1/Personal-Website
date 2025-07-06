import {Link, Outlet} from 'react-router-dom';





function Layout() {





  return (
      <>
        
          
        

        <main style={{ padding: '20px' }}>
          <Outlet />

        </main>
      </>
  );
}

export default Layout;
