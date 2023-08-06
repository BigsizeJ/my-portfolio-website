import { ReactNode } from "react";

interface Props {
  skills: { label: string; icon: string }[];
  skillType: string;
  icon: ReactNode;
}

const Skillset = ({ skills, skillType, icon }: Props) => {
  return (
    <div className="flex flex-col w-full xl:w-[55vw] mt-8">
      <section className="w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="skill-header">
            <span>{icon}</span>
            {skillType}
          </h1>
        </div>
        <div
          className="grid grid-cols-[repeat(3,80px)] 
          
          md:grid-cols-[repeat(5,120px)]
          lg:grid-cols-[repeat(6,120px)] 
          grid-rows-[repeat(3,100px)] md:grid-rows-[repeat(3,120px)]
        justify-between
        w-full  mt-5 gap-5"
        >
          {skills &&
            skills.map((skill: { label: string; icon: string }) => (
              <div
                className="flex flex-col items-center justify-center gap-2 p-2 
              bg-blue-200/25
              dark:bg-blue-900/25"
              >
                <img src={skill.icon} className="aspect-square w-10" />
                <h1 className="text-black font-[500]  dark:text-white text-xs md:text-sm">
                  {skill.label}
                </h1>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Skillset;