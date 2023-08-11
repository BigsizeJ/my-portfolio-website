import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PiCode } from "react-icons/pi";
import { MdHttp } from "react-icons/md";

interface Props {
  pageBackgroundColor: string;
  projectName: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectImage: string;
  projectLink: [string, string];
}

type useCustomTransformType = {
  input: MotionValue<number>;
  inputRange: [number, number];
  outputRange: [number | string, number | string];
};

const useCustomTransform = ({
  input,
  inputRange,
  outputRange,
}: useCustomTransformType) => {
  return useTransform(input, inputRange, outputRange);
};

const Project = ({
  pageBackgroundColor,
  projectName,
  projectDescription,
  projectTechnologies,
  projectLink,
  projectImage,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: pageBackgroundColor }}
      className={`h-screen w-full text-white  top-0 sticky
      justify-center px-5 pt-12 md:pt-20 lg:pt-0 md:px-20 
      gap-x-10 flex flex-col md:flex-row items-center`}
    >
      <div className="grid grid-col-1 grid-row-[1fr,2fr] lg:grid-cols-[1fr,2fr] gap-x-10 gap-y-2">
        <div className="flex flex-col">
          <div className="mb-4 overflow-hidden">
            <motion.h1
              style={{
                opacity: scrollYProgress,
                y: useCustomTransform({
                  input: scrollYProgress,
                  inputRange: [0, 1],
                  outputRange: [70, 0],
                }),
              }}
              className="text-5xl xl:text-7xl font-bold py-2"
            >
              {projectName}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              style={{
                opacity: scrollYProgress,
                y: useCustomTransform({
                  input: scrollYProgress,
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              }}
              className="text-sm xl:text-base"
            >
              {projectDescription}
            </motion.p>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap overflow-y-hidden">
            {projectTechnologies &&
              projectTechnologies.map((technology, index) => (
                <motion.div
                  key={index}
                  className="translate-y-[70px]"
                  style={{
                    opacity: scrollYProgress,
                    y: useCustomTransform({
                      input: scrollYProgress,

                      inputRange: [0, 1],
                      outputRange: [70, 0],
                    }),
                  }}
                >
                  <p className="tech-text">{technology}</p>
                </motion.div>
              ))}
          </div>
          <div className="flex overflow-y-hidden">
            <motion.div
              style={{
                opacity: scrollYProgress,
                y: useCustomTransform({
                  input: scrollYProgress,
                  inputRange: [0, 1],
                  outputRange: [90, 0],
                }),
              }}
              className="flex items-center gap-2 mt-5 translate-y-[90px]"
            >
              <Link to={projectLink[0]} target="_blank" className="link-style">
                <PiCode />
                View code
              </Link>
              <div className="w-[1px] h-[80%] bg-white/50 rounded-full"></div>
              <Link to={projectLink[1]} target="_blank" className="link-style">
                <MdHttp className="text-2xl" />
                Live view
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.img
          src={projectImage}
          style={{
            opacity: scrollYProgress,
            y: useCustomTransform({
              input: scrollYProgress,
              inputRange: [0, 1],
              outputRange: [200, 0],
            }),
            borderRadius: useCustomTransform({
              input: scrollYProgress,
              inputRange: [0, 1],
              outputRange: ["100%", "0%"],
            }),
          }}
          className="object-contain bg-blue-300/25 md:h-[19rem] md:w-fit lg:h-fit g:w-full translate-y-[200px]"
        />
      </div>
    </section>
  );
};

export default Project;
