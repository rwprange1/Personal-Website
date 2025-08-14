import { useState } from "react";

import Projects from "./Projects";
import SideBar from "./SideBar";


export default function ProjectContainer(){
    
    const [project, setProject] = useState<string>("");
    
    const changeProject = (name:string) =>{
       setProject(name);
    }
    
    
    return(
        <div>
            {/** Regular view */}
            {!project ? 
            <Projects onClick={changeProject}/>
            : 
            <SideBar onClick={changeProject} toDisplay={project}/>
            
            }   


        </div>
        
        
    );


};