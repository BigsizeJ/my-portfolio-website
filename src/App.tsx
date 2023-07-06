import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <section className="w-full bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </section>
  );
};

export default App;
