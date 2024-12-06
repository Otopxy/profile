import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ImageUpload from "./components/ImageUpload";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <WorkExperience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
