import picture from "../assets/picture-crop.jpg";
import { TypeAnimation } from "react-type-animation";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { RefObject } from "react";

const Hero = ({ reference }: { reference: RefObject<HTMLDivElement> }) => {
  return (
    <section
      className="w-full flex justify-center py-[4rem] md:py-[8rem]"
      id="home"
      ref={reference}
    >
      <div className="relative  lg:w-full flex flex-col md:px-4  md:flex-row justify-center gap-y-4 md:gap-y-0 gap-x-8 items-center">
        {/* /// contact list for lg device */}
        <section className="hidden xl:flex absolute left-0 text-blue-500 flex-col h-full justify-center gap-y-8">
          <a
            href="https://www.linkedin.com/in/jessie-apac-72154023a/"
            target="_blank"
          >
            <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer" />
          </a>
          <a
            href="https://www.discord.com/users/799252029313908777"
            target="_blank"
          >
            <FaDiscord className="text-xl hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://www.github.com/bigsizeJ" target="_blank">
            <FaGithub className="text-xl hover:text-blue-600 cursor-pointer" />
          </a>
        </section>
        {/* hero image */}
        <img src={picture} className="image-ctn" />
        {/* hero p */}
        <div className="lg:w-[25rem] flex flex-col gap-y-2">
          <TypeAnimation
            sequence={["Hey there!"]}
            wrapper="span"
            className="text-3xl md:text-4xl text-blue-500 font-bold"
          />
          <p className="text-lg lg:text-xl text-gray-900 dark:text-gray-200">
            My name is Jessie, nice to meet you
          </p>
          <p className="text-base text-gray-500 dark:text-gray-300">
            I'm a upcoming fourth-year Computer Science student at the Lyceum of
            Alabang. I am interested in web development, designing websites, AI,
            and overall enjoy development of any sort.
          </p>
          <div className="flex gap-x-6 items-center md:gap-x-8 mt-2">
            <a
              href="mailto:apacjessie@gmail.com"
              className="flex items-center gap-x-2 bg-blue-500 text-white p-2 md:p-3 w-fit rounded-md font-bold hover:bg-blue-600"
            >
              Contact me <MdEmail className="text-xl" />
            </a>
            <section className="flex xl:hidden text-blue-500 h-full items-center gap-x-5">
              <a
                href="https://www.linkedin.com/in/jessie-apac-72154023a/"
                target="_blank"
              >
                <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://www.discord.com/users/799252029313908777"
                target="_blank"
              >
                <FaDiscord className="text-xl hover:text-blue-600 cursor-pointer" />
              </a>
              <a href="https://www.github.com/bigsizeJ" target="_blank">
                <FaGithub className="text-xl hover:text-blue-600 cursor-pointer" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
