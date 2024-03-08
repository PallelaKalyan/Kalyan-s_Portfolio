import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.TECH. - Electronics and Communication Engineering"
            subTitle="Dadi Institute of Engineering and Technology  (2021 - 2024)"
            result="8.4/10"
            des="Relevant Coursework: Electronics and Circuits, Computer Networks, Python Programming, Operating Systems, Embedded Systems, Signals
            and Systems, Operating Systems, Computer Networks, Machine Learning, Information Retrieval, Image Processing ."
          />
          <ResumeCard
            title="Diploma - Electronics and Communication Engineering"
            subTitle="Dadi Institute of Engineering and Technology (2018 - 2021)"
            result="88%"
            des="Relevant coursework : Electronics and Circuits, Microcontrollers, Communication Systems, MS- Office , Python Programming."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="AMAA English Medium High School (2016 - 2018)"
            result="9.7/10"
            des="Relevant Coursework: Mathematics, Science, Social Studies, English Language, Regional Language, Moral Science, Teamwork and Leadership Skills."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Android App Developer | Intern"
            subTitle="Internship by AICTE - (Jan 2024 - Mar 2024 )"
            result="Google"
            des="Drove modernization of Android application features, optimizing performance and user experience.
            Collaborated with senior developers to refactor codebase, enhancing readability and maintainability."
          />
          <ResumeCard
            title="AI-ML Virtual Internship"
            subTitle="Internship by AICTE - ( Apr 2023 - Jul 2023)"
            result="AWS"
            des="Acquired fundamental knowledge of AI and ML algorithms and their applications through Python programming.
                 Developed proficiency in coding and implementing various types of AI and ML algorithms for data analysis and model building."
          />
          <ResumeCard
            title="Web Developement | Intern"
            subTitle="TwiLearn - (Feb 2023 - Apr 2023)"
            result="Twilearn"
            des="Spearheaded migration of legacy front-end code to React.js, elevating performance and scalability. Expanded skills in HTML5, CSS3, JavaScript, React.js, and related Front-End Technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
