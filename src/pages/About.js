import React from "react";
import Media from "../components/Media";
import {Slider, Slide, Col, Card, CardTitle} from 'react-materialize'



const About = () => (
  <div>
    <Slider>
      <Slide
        src="http://lorempixel.com/580/250/nature/1"
        title="Full Stack developer">
        
      </Slide>
      <Slide
        src="http://lorempixel.com/580/250/nature/2"
        title="Anything is possible."
        placement="left">
        
      </Slide>
      <Slide
        src="http://lorempixel.com/580/250/nature/3"
        title="Code... Code... And Code some more."
        placement="right">
        
      </Slide>
    </Slider>
    <p>
      I am a recent graduate from a Full Stack development bootcamp at Case Western Reserve University.
      This was a 6 month immersive program starting with the basics (HTML, CSS, Vanilla JavaScript) and ending with 20 different web application with one of them including a MERN stack ecommerce site. 
    </p>
    <p>
      Last year after taking a 3 month UX/UI course and experiencing the creative end of web development I knew I wanted something more technical. 
      At that time, I decided that I wanted to become a software developer.
       I loved everything about the process from problem solving, efficiency and creating something from nothing. 
    </p>
    <p>
      I am ready to continue my journey as a developer. 
      I am willing and eager to become a sponge in this industry. 
      My goal is to stay innovative, write clean/concise code and always continue to learn. 
      Developing is not just a career choice it is something I am truly passionate about. 
      If you have any additional questions, please do not hesitate to reach out.
    </p>
    <p>
    </p>

  </div>
);

export default About;
