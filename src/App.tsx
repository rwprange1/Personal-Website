import './index.css';
import  Layout  from './Components/Sections/Layout.tsx';
import Home from './Components/Sections/Home.tsx';
import About from "./Components/Sections/About.tsx";
import Research from './Components/Sections/Research.tsx';
import ProjectContainer from './Components/ProjectDisplay/ProjectContainer.tsx';
import Contact from './Components/Sections/Contact.tsx'


import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';




function App() {


  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout  />}>
                    
                    <Route index element={<Home />} />
                    <Route path="about" element={<About/>}/>
                    <Route path="research" element={<Research/>}/>
                    <Route path="projects" element={<ProjectContainer/>}>
                       
                    </Route>
                    
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<>
                        <div>
                            <NavLink className="bg-amber-600"
                                to="/"
                            
                            >Path not found :( Click Me!</NavLink>
                           

                        </div>
                        
                        </>}/>
              </Route>
          </Routes>
      </Router>
         
  )
}

export default App
