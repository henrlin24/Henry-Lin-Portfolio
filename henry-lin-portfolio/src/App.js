import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div id='main'>
        <Header />

        <About />
        <Skills />
        <Projects />
        <WorkExperience />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
