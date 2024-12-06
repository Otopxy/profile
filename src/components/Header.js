import React from 'react';
import myImage from './images/otop.jpg'; // Import image

function Header() {
  return (
    <header className="header">
      <img src={myImage} alt="Temitope" />
      <div>
        <h1>Temitope Dickson Olajide</h1>
        <br></br>
        <p>Software Engineer
          <br></br>
          <br></br>
          <a href="mailto:td-olajide@wiu.edu">Email ||   </a>
      
          <a href="https://linkedin.com/in/temidolajide">Linkedin ||   </a>
      
          <a href="github.com/otopxy">Github</a>
        </p>
        <p>
          
        </p>
      </div>
    </header>
  );
}

export default Header;
