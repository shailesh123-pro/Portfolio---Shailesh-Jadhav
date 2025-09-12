import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
const experience = () => {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      <div className="container experience__container">
        {/* <div className="experience__frontend"> */}
          {/* <div className="experience__content"> */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <h6>Inspacco</h6>
              <small>Associate Software Engineer</small>
            </article>
          {/* </div> */}
        {/* </div> */}

        {/* end of Frontend */}
        {/* <div className="experience__backend"> */}
          {/* <div className="experience__content"> */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <h6>Infosys</h6>
              <small>Specialist Programmer</small>
            </article>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default experience;
