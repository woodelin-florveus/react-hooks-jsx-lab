import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">

    <h2>About Me</h2>
    <p> Im a Flatiron student looking to develop my skills and craft of computer programming </p>
    
    <img src={image} alt="I made this" />

  </div>);
}



// The <About> component should return the following JSX elements:

// a <div> element with an id of "about"
// inside the div element, there should be three child elements:
// a <h2> element with the content of "About Me"
// a <p> element with any content of your choosing
// a <img> element with the src attribute set to the image variable, and the alt attribute set to "I made this"

export default About;
