import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useRef } from "react";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <section className="app">
      <Navbar section={{ homeRef, aboutRef, skillRef, projectRef }} />
      <Hero reference={homeRef} />
      <About reference={aboutRef} />
      <Skills reference={skillRef} />
      <Projects reference={projectRef} />
    </section>
  );
};

export default App;
