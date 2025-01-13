import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
//import ImageUpload from "./components/ImageUpload";
import './App.css';
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Education />
      <WorkExperience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
