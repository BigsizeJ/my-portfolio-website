import { RefObject } from "react";

const Projects = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center mt-20 padding"
      id="project"
      ref={reference}
    >
      <h1 className="section-header">Projects</h1>
      <p className="section-p">My side-projects</p>
      <div className="grid">
        <p className="text-xl mt-10 text-black dark:text-gray-200">
          Coming soon
        </p>
      </div>
    </section>
  );
};

export default Projects;
