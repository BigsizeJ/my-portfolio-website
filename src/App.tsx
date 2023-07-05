import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <section className="w-full bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </section>
  );
};

export default App;
