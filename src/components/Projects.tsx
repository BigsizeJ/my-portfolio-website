import { RefObject } from "react";

const Projects = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center mt-20"
      ref={reference}
    >
      <h1 className="section-header">Projects</h1>
      <p className="section-p">My side-projects</p>
      <div className="grid"></div>
    </section>
  );
};

export default Projects;
