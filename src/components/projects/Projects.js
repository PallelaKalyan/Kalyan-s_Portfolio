import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix  } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gym Management System:"
          des=" Responsive gym management system for efficient operation across all devices.
           Utilized HTML, CSS, and JavaScript for seamless user experience and accessibility."
          src={projectOne}
        />
        <ProjectsCard
          title="Travel Consultancy Website"
          des="Dynamic travel website providing comprehensive travel services. 
          Implemented responsive design principles using HTML for optimal user experience across devices."
          src={projectTwo}
        />
        <ProjectsCard
          title="NolnaAI App Clone:"
          des=" Responsive gym management system for efficient management across devices.
           HTML/CSS/JavaScript project"
          src={projectThree}
        />
        <ProjectsCard
          title="Drowsiness Detection:"
          des=" Drowsiness detection system utilizing computer vision techniques to monitor eye movements in real-time.
           Implemented in Python for proactive alerting."
          src={projectFour}
        />
        <ProjectsCard
          title="Face recognition-based attendance system"
          des=" This system leveraging Python for automated tracking and management. 
          Utilizes computer vision algorithms for accurate identification"
          src={projectFive}
        />
        <ProjectsCard
          title="Neumorphism Calculator:"
          des=" Stylish web-based calculator embracing Neumorphism design trend.
           Achieved intuitive UI with basic arithmetic operations using HTML and CSS"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects