import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  pageBackgroundColor: string;
  projectName: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectImage: string;
}

const Project = ({
  pageBackgroundColor,
  projectName,
  projectDescription,
  projectTechnologies,
  projectImage,
}: Props) => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className={`bg-[${pageBackgroundColor}] h-screen w-full text-white  top-0 sticky
      justify-center px-5 pt-18 md:pt-20 lg:pt-0 md:px-20 
      gap-x-10 flex flex-col md:flex-row items-center`}
    >
      <div className="grid grid-col-1 grid-row-[1fr,2fr] lg:grid-cols-[1fr,2fr] gap-x-10 gap-y-5">
        <div className="flex flex-col">
          <motion.h1 className="text-5xl xl:text-7xl  font-bold mb-5">
            {projectName}
          </motion.h1>
          <p className="text-sm xl:text-base">{projectDescription}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {projectTechnologies &&
              projectTechnologies.map((technology) => (
                <p className="tech-text">{technology}</p>
              ))}
          </div>
        </div>
        <img src={projectImage} className="object-contain bg-blue-300/25" />
      </div>
    </section>
  );
};

export default Project;
