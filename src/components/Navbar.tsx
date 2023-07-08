import { useState, useEffect, RefObject, useRef } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaSun, FaMoon } from "react-icons/fa";

interface Prop {
  section: {
    homeRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    skillRef: RefObject<HTMLDivElement>;
    projectRef: RefObject<HTMLDivElement>;
  };
}

interface navlinkType {
  id: string;
  label: string;
  link: string;
  type: string;
  active: boolean;
}

const Navbar = ({ section }: Prop) => {
  const { homeRef, aboutRef, skillRef, projectRef } = section;
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  const navlinks = [
    {
      id: nanoid(),
      label: "Home",
      link: "#",
      type: "home",
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
  ];

  const observerOptions = {
    root: null,
    rootMargin: "10px",
    threshold: 0.9,
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    return;
  }, []);

  useEffect(() => {
    return isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    const sectionRefs = [homeRef, aboutRef, skillRef, projectRef];
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sectionRefs.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (type: string) => {
    setActiveLink(type);
    setIsNavOpen((prev) => !prev);
    switch (type) {
      case "home":
        return homeRef.current?.scrollIntoView({ behavior: "smooth" });
      case "about":
        return aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      case "skill":
        return skillRef.current?.scrollIntoView({ behavior: "smooth" });
      case "project":
        return projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleThemeChange = async () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className={`nav ${isNavOpen ? "open" : "close"}`}>
      <h1 className="font-[500] dark:text-gray-200">Jessie Apac</h1>
      <nav className="gap-x-4 hidden md:flex items-center">
        {navlinks.map((link: navlinkType) => (
          <NavLink
            key={nanoid()}
            to={link.link}
            className={`${
              activeLink === link.type && "!text-blue-500"
            } font-[500] text-black dark:text-gray-200`}
            onClick={() => handleLinkClick(link.type)}
          >
            {link.label}
          </NavLink>
        ))}
        <button className="theme-btn text-xl" onClick={handleThemeChange}>
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
        {navlinks.map((link: navlinkType) => (
          <NavLink
            key={nanoid()}
            to={link.link}
            className={`${
              activeLink === link.type
                ? "text-blue-800 dark:text-blue-400"
                : "text-white dark:text-gray-200"
            } font-[500]`}
            onClick={() => handleLinkClick(link.type)}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          className="theme-btn text-3xl mt-5"
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
    </header>
  );
};

export default Navbar;
