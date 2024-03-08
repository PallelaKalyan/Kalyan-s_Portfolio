import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaGithub, FaLinkedinIn , FaInstagram } from "react-icons/fa";
import {  SiBootstrap, SiPython, SiReact } from 'react-icons/si';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer.", "Tech Enthusiast & Learner.", "Creative Web Designer.", "Passionate Code Crafter."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">KALYAN </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         A motivated and results-driven Electrical Engineering graduate with a passion for technology, I have a proven track record of success in web development, Android app creation, and software development. 
         I am seeking opportunities to leverage my skills in a dynamic tech environment and make a positive impact.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="http://www.linkedin.com/in/kalyan-pallela" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/PallelaKalyan" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="https://instagram.com/kalyan_pallela?igshid=YmMyMTA2M2Y" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaInstagram />
            </a>
          </div>
        </div>
           <div>
                 <h2 className="text-base uppercase font-titleFont mb-4">
                   BEST SKILL ON
                 </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <SiReact />
                </span>
                <span className="bannerIcon">
                  <SiBootstrap />
                </span>
               <span className="bannerIcon">
                  <SiPython />
                </span>
             </div>
           </div>
      </div>
    </div>
  );
}

export default LeftBanner;
