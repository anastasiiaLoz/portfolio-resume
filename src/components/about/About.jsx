import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ Years Working in Hospitality and Customer Services</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>○ Bachelor Degree in Translation and Linguistics</small>
              <small>○ IT School GOIT (Ukraine)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Visit my Github repos for details</small>
            </article>
          </div>
          <p>
          I am an enthusiastic, goal-oriented professional with more than 10 years of experience in Hospitality and Customer Support fields located in Portugal,
          Brazil, Australia, USA and Ukraine. Currently, looking to start a new career as Junior MERN Full Stack Developer. Great team work ability, detail orientated, effective communication and
          politeness, excellent efficiency and responsibility. Fluent in English, Russian, Ukrainian, Portuguese languages, 
          studying Korean at the moment. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
