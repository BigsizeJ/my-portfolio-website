import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BackgroundAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BackgroundAnimation />
    </section>
  );
};

export default App;
