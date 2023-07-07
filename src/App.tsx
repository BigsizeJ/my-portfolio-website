import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BackgroundAnimation from "./components/BackgroundAnimation";
import { useEffect, useState } from "react";
const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    return isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <section className="app">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BackgroundAnimation />
    </section>
  );
};

export default App;
