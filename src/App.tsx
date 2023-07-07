import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BackgroundAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <section className="app">
      <BackgroundAnimation />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </section>
  );
};

export default App;
