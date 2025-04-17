import React from 'react';
import myImage from './images/resume-qr.png'; // Import image
function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <i>
        <p>Blockchain Based Ticketing System.</p>
        <p>Blockchain Wallet Tracking System.</p>
        <p>Sport Item MarketPlace.</p>
        <p>Agriculture MarketPlace.</p>
        <p>NLP-bot-diagnostics chatbot</p>
      </i>
      </div>
    <div>
    <h2>Resume</h2>
    <p> Scan to see a copy of my resume:<br></br>
    <img src={myImage} alt="My resume QR Code"/> <br></br>
    </p>
    </div>
    </section>
  );
}

export default Projects;
