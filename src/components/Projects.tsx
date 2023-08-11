import { RefObject } from "react";
import Project from "./Project";
import exclsvPicture from "../assets/exclsv.png";
import thoughtboxPicture from "../assets/thoughtbox.png";

const Projects = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center mt-20 projects-ctn"
      id="project"
      ref={reference}
    >
      <h1 className="section-header">Projects</h1>
      <p className="section-p">My selected personal projects.</p>
      <div className="w-full mt-10">
        <Project
          pageBackgroundColor="#000"
          projectName="EXCLSV"
          projectDescription="The E-commerce Website is a full-stack project built using modern
          web technologes. The frontend is developed using Vite, Typescript,
          and React.js, while state management is implemented using Redux
          Toolkit (RTK). The backend is powered by MongoDB, Express, and
          Node.js, providing a robust foundation for data storage and
          server-side functionalities."
          projectTechnologies={[
            "MERN stack",
            "TypeScript",
            "Vite",
            "RTK",
            "Tailwind",
          ]}
          projectLink={["#", "https://exclsv.vercel.app"]}
          projectImage={exclsvPicture}
        />
        <Project
          pageBackgroundColor="#0f172a"
          projectName="ThoughtBox"
          projectDescription="Built using the MERN stack, Socket.IO, and Tailwind CSS with TypeScript, this platform mirrors Reddit's social engagement. It features real-time interactions, 
          Google OAuth for security, and RTK for state management. Users can discuss, post, and comment within an intuitive, responsive UI."
          projectTechnologies={[
            "Mern stack",
            "TypeScript",
            "0auth",
            "Tailwind",
            "Vite",
            "RTK",
          ]}
          projectLink={[
            "https://github.com/apacjessie/ThoughtBox_mern_stack",
            "#",
          ]}
          projectImage={thoughtboxPicture}
        />
      </div>
    </section>
  );
};

export default Projects;
