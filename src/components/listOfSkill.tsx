import htmlIcon from "../assets/frontend/html-logo.png";
import cssIcon from "../assets/frontend/css-logo.svg";
import jsIcon from "../assets/frontend/javascript-logo.png";
import tsIcon from "../assets/frontend/typescript-logo.svg";
import reactIcon from "../assets/frontend/react-logo.png";
import tailwindIcon from "../assets/frontend/tailwind-logo.svg";
import reduxIcon from "../assets/frontend/redux-logo.png";
import saasIcon from "../assets/frontend/saas-logo.svg";
import styledIcon from "../assets/frontend/styled-logo.png";
import framerIcon from "../assets/frontend/framer-logo.png";

import nodeIcon from "../assets/backend/node-logo.svg";
import expressIcon from "../assets/backend/express-logo.svg";
import javaIcon from "../assets/backend/java-logo.svg";
import pythonIcon from "../assets/backend/python-logo.png";
import mysqlIcon from "../assets/backend/mysql-logo.svg";
import mongodbIcon from "../assets/backend/mongodb-logo.png";
import socketIcon from "../assets/backend/socket-logo.svg";

import gitIcon from "../assets/tools/git-logo.svg";
import githubIcon from "../assets/tools/github-logo.svg";
import viteIcon from "../assets/tools/vitejs-logo.svg";
import webpackIcon from "../assets/tools/webpack-logo.svg";
import npmIcon from "../assets/tools/npm-logo.svg";
import bashIcon from "../assets/tools/bash-logo.svg";
import linuxIcon from "../assets/tools/linux-logo.svg";

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
      icon: nodeIcon,
    },
    {
      label: "ExpressJS",
      icon: expressIcon,
    },
    {
      label: "Python",
      icon: pythonIcon,
    },
    {
      label: "Java",
      icon: javaIcon,
    },

    {
      label: "MongoDB",
      icon: mongodbIcon,
    },
    {
      label: "MySQL",
      icon: mysqlIcon,
    },
    {
      label: "Socket.io",
      icon: socketIcon,
    },
  ],
  tools: [
    {
      label: "Git",
      icon: gitIcon,
    },
    { label: "Github", icon: githubIcon },
    { label: "Vite", icon: viteIcon },
    { label: "Webpack", icon: webpackIcon },
    { label: "NPM", icon: npmIcon },

    {
      label: "Bash",
      icon: bashIcon,
    },
    {
      label: "Linux",
      icon: linuxIcon,
    },
  ],
};
