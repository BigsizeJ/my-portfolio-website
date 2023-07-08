import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/Apac Resume.pdf";
import { RefObject } from "react";

const About = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      id="about"
      ref={reference}
    >
      <h1 className="section-header">About Me</h1>
      <p className="section-p">Let me introduce myself.</p>

      <div className="mt-8 w-full xl:w-[55vw] text-justify text-gray-700 dark:text-gray-300">
        <p>
          Hello! I'm Jessie Apac, an aspiring Web Developer. I have been
          continuously enhancing my skills and exploring various programming
          languages. I have gained expertise in the MERN stack (MongoDB,
          Express.js, React, Node.js), CSS, Figma, React Native in mobile app
          development, and have also acquired knowledge of SQL databases. I am
          proficient in working with WebSockets and Socket.io to develop
          real-time web applications. I am driven by a strong desire to
          contribute to the ever-evolving world of technology and strive to make
          a positive impact through my work.
        </p>
        <div className="grid grid-cols-3 gap-y-4   md:grid-flow-col gap-x-4 mt-3 w-full">
          <div className="text-xl flex flex-col items-center">
            <h1 className="font-bold">5</h1>
            <p className="text-xs md:text-sm text-center">
              Programming <br></br> languages
            </p>
          </div>
          <div className="text-xl flex flex-col items-center">
            <h1 className="font-bold">10+</h1>
            <p className="text-xs md:text-sm text-center">
              Completed <br></br> GitHub projects
            </p>
          </div>
          <div className="text-xl flex flex-col items-center">
            <h1 className="font-bold">10+</h1>
            <p className="text-xs md:text-sm text-center">
              Frameworks and <br></br> Libraries
            </p>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <a
              href={resume}
              download={true}
              className="flex items-center p-3 md:p-4 text-sm font-bold text-white gap-x-2 bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Download Resume
              <AiOutlineDownload className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
