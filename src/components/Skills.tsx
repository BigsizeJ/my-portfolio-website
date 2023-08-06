import { RefObject, useState } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { AiFillDatabase } from "react-icons/ai";
import { skills } from "./skillset";
import { MdMiscellaneousServices } from "react-icons/md";
import Skillset from "./Skillset";

enum DropdownType {
  FRONTEND = "frontend",
  BACKEND = "backend",
  MISCELLANEOUS = "miscellaneous",
}

const Skills = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex flex-col items-center mt-20 padding"
      id="skill"
      ref={reference}
    >
      <h1 className="section-header">Tools & Skills</h1>
      <p className="section-p">My technical skills and tools i use.</p>

      <Skillset
        skills={skills.frontend}
        skillType="Frontend"
        icon={<PiBracketsCurlyBold className="text-blue-500 text-2xl" />}
      />
    </section>
  );
};

export default Skills;
