import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaSun, FaMoon } from "react-icons/fa";

interface navlinkType {
  id: string;
  label: string;
  link: string;
  type: string;
  active: boolean;
}

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const [navlink, setNavlink] = useState<navlinkType[]>([
    {
      id: nanoid(),
      label: "Home",
      link: "#",
      type: "hero",
      active: true,
    },
    {
      id: nanoid(),

      label: "About",
      link: "#about",
      type: "about",
      active: false,
    },
    {
      id: nanoid(),
      label: "Skills",
      link: "#skills",
      type: "skill",
      active: false,
    },
    {
      id: nanoid(),
      label: "Projects",
      link: "#projects",
      type: "project",
      active: false,
    },
  ]);

  useEffect(() => {
    return isDark
      ? document.querySelector("#root")?.classList.add("dark")
      : document.querySelector("#root")?.classList.remove("dark");
  }, [isDark]);

  const handleLinkClick = (id: string) => {
    const updateNavlink = navlink.map((link: navlinkType) => {
      if (link.id === id) return { ...link, active: true };
      return { ...link, active: false };
    });
    setNavlink(updateNavlink);
  };

  return (
    <nav className={`nav ${isNavOpen ? "open" : "close"}`}>
      <h1 className="font-[500] dark:text-gray-200">Jessie Apac</h1>
      <nav className="gap-x-4 hidden md:flex items-center">
        {navlink &&
          navlink.map((link: navlinkType) => (
            <NavLink
              key={nanoid()}
              to={link.link}
              className={`${
                link.active && "!text-blue-500"
              } font-[500] text-black dark:text-gray-200`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </NavLink>
          ))}
        <button
          className="text-xl flex cursor-pointer justify-center items-center relative overflow-y-hidden"
          onClick={() => setIsDark((prev) => !prev)}
        >
          <FaSun
            className={`${
              isDark ? "translate-y-8" : "translate-y-0"
            } transition-transform duration-200 absolute text-[#FFA500]`}
          />
          <FaMoon
            className={`${
              isDark ? "translate-y-0" : "-translate-y-8"
            } transition-transform duration-200 transition-color dark:text-[#D3D3D3]`}
          />
        </button>
      </nav>

      <button
        className={`hamburger-button ${isNavOpen ? "open" : ""}`}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <nav className={`${isNavOpen ? "open" : "close"} hamburger-menu`}>
        {navlink &&
          navlink.map((link: navlinkType) => (
            <NavLink
              key={nanoid()}
              to={link.link}
              className={`${
                link.active
                  ? "text-blue-800 dark:text-blue-400"
                  : "text-white dark:text-gray-200"
              } font-[500]`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </NavLink>
          ))}
        <button
          className="text-3xl mt-5 flex cursor-pointer justify-center items-center relative overflow-y-hidden"
          onClick={() => setIsDark((prev) => !prev)}
        >
          <FaSun
            className={`${
              isDark ? "translate-y-10" : "translate-y-0"
            } transition-transform duration-200 absolute text-[#FFA500]`}
          />
          <FaMoon
            className={`${
              isDark ? "translate-y-0" : "-translate-y-10"
            } transition-transform duration-200 transition-color dark:text-[#D3D3D3]`}
          />
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
