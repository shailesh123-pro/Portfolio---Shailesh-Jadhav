import React from "react";
import "./about.css";
import aboutme from "../../assests/aboutme.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";
import p2 from "../../assests/SSJ-8.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={p2} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />

              <h5>Education</h5>
              <small>Pursuing B.E. in Computer Engineering at AISSMS COE,Pune</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience/Current-role</h5>
              <small>Sophomore</small>
            </article>

            <article className="about__card">
              <VscNewFolder className="about__icon" />
              <a
                href="https://drive.google.com/drive/u/0/folders/1QHc9MCTY6jaaJXBgWJRlbI8sTWa6eZXX"
                target="_blank"
              >
                <h5 className="under">Certificates</h5>
              </a>
            </article>
          </div>

          <p>
            Hello, I am Shailesh Jadhav and I am a web developer currently
            pursuing my B.E. in Computer Engineering at All India Shri Shivaji Memorial Society's Collage of Engineering,Pune. I live in Beed. I am a passionate
            coder who desires to learn, experiment, and explore technical,
            analytical, and problem-solving skills and has an interest in
            solving various algorithm problems. I have a keen interest in Data
            Structures, Algorithms and Problem-solving . I spend most of my day on
            experimenting with HTML, CSS and Javascript. I enjoy coding and the challenge of learning
            something new everyday.
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
