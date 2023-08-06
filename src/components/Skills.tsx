import { RefObject, useState } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowUp,
  MdMiscellaneousServices,
} from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { skills } from "./skillset";
import Skill from "./Skill";

enum DropdownType {
  FRONTEND = "frontend",
  BACKEND = "backend",
  MISCELLANEOUS = "miscellaneous",
}

const Skills = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  const [dropdown, setDropdown] = useState<{
    frontend: boolean;
    backend: boolean;
    miscellaneous: boolean;
  }>({ frontend: false, backend: false, miscellaneous: false });

  const handleDropdownClick = (type: DropdownType) => {
    switch (type) {
      case DropdownType.FRONTEND:
        return dropdown.frontend
          ? setDropdown({ ...dropdown, frontend: false })
          : setDropdown({
              ...dropdown,
              frontend: true,
              backend: false,
              miscellaneous: false,
            });
      case DropdownType.BACKEND:
        return dropdown.backend
          ? setDropdown({ ...dropdown, backend: false })
          : setDropdown({
              ...dropdown,
              backend: true,
              frontend: false,
              miscellaneous: false,
            });
      case DropdownType.MISCELLANEOUS:
        return dropdown.miscellaneous
          ? setDropdown({ ...dropdown, miscellaneous: false })
          : setDropdown({
              ...dropdown,
              miscellaneous: true,
              backend: false,
              frontend: false,
            });
      default:
        return;
    }
  };

  return (
    <section
      className="w-full flex flex-col items-center mt-20 padding"
      id="skill"
      ref={reference}
    >
      <h1 className="section-header">Skills</h1>
      <p className="section-p">My technical skills.</p>
      <div className="flex flex-col w-full xl:w-[55vw] mt-8">
        <section className="w-full">
          <div className="w-full flex justify-between items-center">
            <h1 className="skill-header">
              <span>
                <PiBracketsCurlyBold className="text-blue-500 text-2xl" />
              </span>
              Frontend
            </h1>
            <MdKeyboardDoubleArrowUp
              className={`${
                dropdown.frontend ? "rotate-0" : "rotate-180"
              } text-blue-500 text-3xl cursor-pointer transition duration-300`}
              onClick={() => handleDropdownClick(DropdownType.FRONTEND)}
            />
          </div>

          {dropdown.frontend && (
            <div className="p-5 w-full flex flex-col gap-y-5">
              {skills.frontend.map((skill) => (
                <Skill skill={skill} />
              ))}
            </div>
          )}
        </section>
        <section className="w-full mt-8">
          <div className="w-full flex justify-between items-center">
            <h1 className="skill-header">
              <span>
                <AiFillDatabase className="text-blue-500 text-2xl" />
              </span>
              Backend
            </h1>
            <MdKeyboardDoubleArrowUp
              className={`${
                dropdown.backend ? "rotate-0" : "rotate-180"
              } text-blue-500 text-3xl cursor-pointer transition duration-300`}
              onClick={() => handleDropdownClick(DropdownType.BACKEND)}
            />
          </div>
          {dropdown.backend && (
            <div className="p-5 w-full flex flex-col gap-y-5">
              {skills.backend.map((skill) => (
                <Skill skill={skill} />
              ))}
            </div>
          )}
        </section>
        <section className="w-full mt-8">
          <div className="w-full flex justify-between items-center">
            <h1 className="skill-header">
              <span>
                <MdMiscellaneousServices className="text-blue-500 text-2xl" />
              </span>
              Miscellaneous
            </h1>
            <MdKeyboardDoubleArrowUp
              className={`${
                dropdown.miscellaneous ? "rotate-0" : "rotate-180"
              } text-blue-500 text-3xl cursor-pointer transition duration-300`}
              onClick={() => handleDropdownClick(DropdownType.MISCELLANEOUS)}
            />
          </div>
          {dropdown.miscellaneous && (
            <div className="p-5 w-full flex flex-col gap-y-5">
              {skills.miscellaneous.map((skill) => (
                <Skill skill={skill} />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Skills;
