import React from "react";
import Project from "./Project";

type Props = {
  project: any
};

function Projects({project}: Props) {

  return (
    <div className="relative grid overflow-hidden w-[90%] mx-auto">
      <h2 className="head justify-self-center mt-5">Projects</h2>

      <div className="flex mt-10 md:mt-14 items-center h-screen space-x-5 overflow-x-scroll scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-900 scrollbar-thin mr-3">
        {project.map((project:any)=>(
          <Project key={project.title} project={project}/>
        ))}
        
  
      </div>
    </div>
  );
}

export default Projects;
