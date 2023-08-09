import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  skills: { label: string; icon: string }[];
  skillType: string;
  icon: ReactNode;
}

const Skillset = ({ skills, skillType, icon }: Props) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: "spring",
      },
    }),
  };

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
          className="grid grid-cols-[repeat(3,1fr)] 
          md:grid-cols-[repeat(5,1fr)]
          xl:grid-cols-[repeat(6,1fr)]
          grid-rows-[repeat(3,1fr)] md:grid-rows-[repeat(2,minmax(120px,1fr))]
        justify-center md:justify-between
        w-full  mt-5 gap-5"
        >
          {skills &&
            skills.map((skill: { label: string; icon: string }, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="skill-tech-ctn"
              >
                <LazyLoadImage
                  src={skill.icon}
                  effect="blur"
                  className="aspect-square w-10"
                />
                <h1 className="text-black font-[500]  dark:text-white text-xs md:text-sm">
                  {skill.label}
                </h1>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Skillset;
