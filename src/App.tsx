import './index.css';
import  Layout  from './Components/Sections/Layout.tsx';
import Home from './Components/Sections/Home.tsx';
import About from "./Components/Sections/About.tsx";
import Research from './Components/Sections/Research.tsx';
import Projects from './Components/Projects/Projects.tsx';
import Contact from './Components/Sections/Contact.tsx'
import OfficeHours from './Components/Sections/OfficeHours.tsx'
import Chess from '../src/Components/Projects/Chess.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout  />}>
                    
                    <Route index element={<Home />} />
                    <Route path="about" element={<About/>}/>
                    <Route path="research" element={<Research/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="projects/chess" element={<Chess/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="hours" element={<OfficeHours/>}/>
              </Route>
          </Routes>
      </Router>
         
  )
}

export default App
