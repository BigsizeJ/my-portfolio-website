import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { TbMenu } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa";

interface Props {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

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
  ]);

  useEffect(() => {
    return isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  const handleLinkClick = (id: string) => {
    const updateNavlink = navlink.map((link: navlinkType) => {
      if (link.id === id) return { ...link, active: true };
      return { ...link, active: false };
    });
    setNavlink(updateNavlink);
  };

  return (
    <nav className="flex w-full justify-between items-center sticky py-2 top-0 z-50">
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
        <div
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
        </div>
      </nav>

      <TbMenu
        className="flex md:hidden text-black text-3xl mb-2 z-50 relative"
        onClick={() => setIsNavOpen((prev) => !prev)}
      />

      <nav
        className={`${
          isNavOpen
            ? "w-screen h-screen inset-0 m-auto bg-blue-500"
            : "w-20 h-20 bg-transparent rounded-full inset-0 m-auto"
        } gap-x-4  md:hidden fixed   z-20 transition-[width_height_scale] duration-200`}
      >
        {/* {navlink &&
            navlink.map((link: navlinkType) => (
              <NavLink
                key={nanoid()}
                to={link.link}
                className={`${
                  link.active ? "text-blue-500" : "text-black"
                } font-[500]`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </NavLink>
            ))} */}
      </nav>
    </nav>
  );
};

export default Navbar;
