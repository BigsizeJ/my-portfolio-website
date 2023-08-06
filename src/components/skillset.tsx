import htmlIcon from "../assets/html-logo.png";
import cssIcon from "../assets/css-logo.svg";
import jsIcon from "../assets/javascript-logo.png";
import tsIcon from "../assets/typescript-logo.svg";
import reactIcon from "../assets/react-logo.png";
import tailwindIcon from "../assets/tailwind-logo.svg";
import reduxIcon from "../assets/redux-logo.png";
import saasIcon from "../assets/saas-logo.svg";
import styledIcon from "../assets/styled-logo.png";
import framerIcon from "../assets/framer-logo.png";

export const skills = {
  frontend: [
    {
      label: "HTML",
      icon: htmlIcon,
    },
    {
      label: "CSS",
      icon: cssIcon,
    },
    { label: "SASS", icon: saasIcon },
    {
      label: "Tailwind CSS",
      icon: tailwindIcon,
    },
    { label: "Styled Component", icon: styledIcon },
    {
      label: "JavaScript",
      icon: jsIcon,
    },
    {
      label: "TypeScript",
      icon: tsIcon,
    },
    {
      label: "ReactJS",
      icon: reactIcon,
    },
    { label: "Redux", icon: reduxIcon },
    {
      label: "Framer-motion",
      icon: framerIcon,
    },
  ],
  backend: [
    {
      label: "NodeJS",
    },
    {
      label: "Python",
    },
    {
      label: "Java",
    },
    {
      label: "ExpressJS",
    },
    {
      label: "MongoDB",
    },
    {
      label: "MySQL",
    },
    {
      label: "Socket.io",
    },
  ],
  miscellaneous: [
    {
      label: "Git",
    },
    {
      label: "Bash",
    },
    { label: "Vite" },
    { label: "Webpack" },
    { label: "NPM" },
    { label: "API Integration" },
    {
      label: "RESTful API",
    },
  ],
};
