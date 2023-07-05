import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { TbMenu } from "react-icons/tb";

// Or Access Link,Element,etc as follows

interface navlinkType {
  id: string;
  label: string;
  link: string;
  type: string;
  active: boolean;
}

interface Props {
  hero: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
}

const Navbar = () => {
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

  const scrollToSection = (section: string) => {
    switch (section) {
      case "hero":
        return refContainer.hero.current.scrollIntoView({ behavior: "smooth" });
      case "about":
        return refContainer.about.current.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  const handleLinkClick = (id: string) => {
    const updateNavlink = navlink.map((link: navlinkType) => {
      if (link.id === id) return { ...link, active: true };
      return { ...link, active: false };
    });
    setNavlink(updateNavlink);
  };

  return (
    <section className="flex w-full justify-between items-center sticky py-2 top-0 z-50 bg-white">
      <h1 className="font-[500]">Jessie Apac</h1>
      <nav className="gap-x-4 hidden md:flex">
        {navlink &&
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
          ))}
      </nav>

      <TbMenu className="flex md:hidden text-black text-3xl mb-2" />
    </section>
  );
};

export default Navbar;
