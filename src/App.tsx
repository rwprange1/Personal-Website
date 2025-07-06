import './index.css';
import  Layout  from './Components/Sections/Layout.tsx';
import Games from './Components/Sections/Games.tsx'
import Home from './Components/Sections/Home.tsx';
import About from "./Components/Sections/About.tsx";
import GameDetail from "./Components/Games/GameDetail.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {




  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout  />}>
                    <Route index element={<Home />} />
                    <Route path="games" element={<Games/>}/>
                    <Route path="games/:gameId" element={<GameDetail />} />
                    <Route path="about" element={<About/>}/>
              </Route>
          </Routes>
      </Router>
         
  )
}

export default App
