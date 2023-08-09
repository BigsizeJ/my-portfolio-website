import picture from "../../assets/exclsv.png";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Exclsv = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {}, [scrollY]);

  return (
    <section
      ref={ref}
      className="h-screen w-full text-white bg-black top-0 sticky
    justify-center px-5 pt-18 md:pt-20 lg:pt-0 md:px-20 gap-x-10 flex flex-col  md:flex-row items-center"
    >
      <div className="grid grid-col-1 grid-row-[1fr,2fr] lg:grid-cols-[1fr,2fr] gap-x-10 gap-y-5">
        <div className="flex flex-col">
          <motion.h1 className="text-5xl xl:text-7xl  font-bold mb-5">
            EXCLSV
          </motion.h1>
          <p className="text-sm xl:text-base">
            The E-commerce Website is a full-stack project built using modern
            web technologes. The frontend is developed using Vite, Typescript,
            and React.js, while state management is implemented using Redux
            Toolkit (RTK). The backend is powered by MongoDB, Express, and
            Node.js, providing a robust foundation for data storage and
            server-side functionalities.
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <p className="tech-text">MERN stack</p>
            <p className="tech-text">Vite</p>
            <p className="tech-text">TypeScript</p>
            <p className="tech-text">RTK</p>
          </div>
        </div>
        <img src={picture} className="object-contain bg-blue-300/25" />
      </div>
    </section>
  );
};

export default Exclsv;
