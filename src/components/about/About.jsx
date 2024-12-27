import React from "react";
import { FaAward } from "react-icons/fa";
import Me from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Achievements</h5>
              <small>Hackathon winner (ui/ux) Category</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>
            Hola! I am Ganesh Singh Parmar, an aspiring frontend developer with
            a strong foundation in HTML, CSS, and JavaScript. I have experience
            building responsive web applications using React and am passionate
            about creating intuitive and dynamic user interfaces. Currently, I
            am in my final year of pursuing a Bachelor's degree in Electronics
            and Communication Engineering from the College of Technology and
            Engineering, Udaipur. Over the past 2 years, I have organized and
            coordinated technical workshops and events, managed project teams,
            and promoted club activities. Notably, I as a team was the winner of the Hack
            It Up Hackathon (UI/UX Category) in 2024 with our project "Campus
            Connect." <strong className="want__to">Wanna know more?</strong>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
