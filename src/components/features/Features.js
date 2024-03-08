import React from 'react'
import { AiFillAppstore, FaMobile, FaCode, FaServer, FaRegSmile, FaGlobe } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-End Development:"
          des="Proficient in HTML, CSS, and JavaScript, I create dynamic user interfaces with a focus on accessibility and responsiveness."
          icon={<FaCode />}
        />
        <Card
          title="Android App Development:"
          des="At a beginner level, I'm learning Android app development using Kotlin to create simple mobile applications."
          icon={<FaMobile />}
        />
        <Card
          title="Python Coding:"
          des="Skilled in Python programming, adept at developing image processing projects using libraries and implementing efficient solutions."
          icon={<FaCode />}
        />
        <Card
          title="Web Development:"
          des="Capable of building dynamic web applications with HTML, CSS, JavaScript, and Python, focusing on functionality and user interaction."
          icon={<FaServer />}
        />
        <Card
          title="UX/UI Design:"
          des="Passionate about creating intuitive user experiences. Experience with prototyping tools and user-centric design methodologies."
          icon={<FaRegSmile />}
        />
        <Card
          title="Hosting Websites:"
          des="Well-versed in GitHub and developer tools, proficient in deploying and optimizing web applications for reliable performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features