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
          <h4>Inspacco</h4>
          <h4>Associate Software Engineer</h4>
          <small>
            <h5>
              Internship – Web Development Intern (Feb 2024 – Jul 2024) :{" "}
            </h5>{" "}
            I began my journey at Inspacco in Pune, India, as a Web Development
            Intern. My initial focus was on web scraping using JavaScript,
            Node.js, and the Puppeteer library to automate data collection and
            streamline operations. During this phase, I gained strong
            problem-solving skills and hands-on experience with backend
            scripting.
            <h5>
              Full-Time – Associate Software Engineer (Jul 2024 – Dec 2024)
            </h5>{" "}
            After completing my internship, I joined Inspacco as a full-time
            Associate Software Engineer. In this role, I have built multiple
            reusable components from scratch using React.js and DaisyUI,
            implementing complete CRUD (Create, Read, Update, Delete)
            functionalities for client data management. I have also worked
            extensively with GraphQL to design efficient queries and mutations,
            ensuring seamless communication between the frontend and backend.
            Alongside frontend development, I contributed to backend tasks with
            Node.js, developing features and optimizing server-side performance.
            My work has significantly improved the scalability, functionality,
            and overall user experience of Inspacco’s applications.
          </small>
        </article>
        {/* </div> */}
        {/* </div> */}

        {/* end of Frontend */}
        {/* <div className="experience__backend"> */}
        {/* <div className="experience__content"> */}
        <article className="about__card">
          <FiUsers className="about__icon" />
          <h4>Infosys</h4>
          <h4>Specialist Programmer</h4>
          <small>
          As part of the Specialist Programmer training at Infosys, I gained
          in-depth expertise in Big Data technologies, including Unix, PySpark,
          Spark, MySQL, Python, and MongoDB, along with hands-on experience in
          large-scale data processing and management. 
          <h5>Microsoft:</h5>Currently, I am working on
          a high-impact Microsoft project, contributing across the full stack.
          On the backend, I develop scalable services using .NET, while on the
          frontend, I build efficient user interfaces with React.js and GraphQL.
          For data transformation, I leverage Scala, and for cloud operations
          and CI/CD pipelines, I work with Azure DevOps. Additionally, I utilize
          Azure Synapse and Notebooks to design and optimize data workflows. My
          role spans backend, frontend, cloud, and data engineering, enabling me
          to deliver robust, enterprise-grade solutions that enhance application
          performance and business value.
          </small>
        </article>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default experience;
