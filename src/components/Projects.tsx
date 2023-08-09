import { RefObject } from "react";
import Project from "./Project";
import exclsvPicture from "../assets/exclsv.png";

const Projects = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center mt-20"
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
          projectTechnologies={["MERN stack", "TypeScript", "Vite", "RTK"]}
          projectImage={exclsvPicture}
        />
      </div>
    </section>
  );
};

export default Projects;
