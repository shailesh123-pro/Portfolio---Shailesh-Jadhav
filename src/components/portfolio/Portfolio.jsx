import React from "react";
import "./portfolio.css";
import dmc from "../../assests/Project-Final.png";
import NM from "../../assests/NM.png";
import FW from "../../assests/FrontendWorld.png";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={dmc} alt="" />
          </div>
          <h3>Water Supply Management</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/shailesh123-pro/Final-Year-Project"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href=" "
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NM} alt="" />
          </div>
          <h3>Note Reminder</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/shailesh123-pro/inotebook"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FW} alt="" />
          </div>
          <h3>FrontendWorld</h3>
          <div className="portfolio__item-cta">
            <div className="flex flex-col gap-3">
              {/* Row for buttons */}
              <div className="portfolio__item-cta">
                <a href="/" className="btn" rel="noreferrer" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://frontendworld.vercel.app/"
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>

              {/* Description below */}
              <small className="text-sm text-gray-600">
                I started frontendworld as a side project with my 2 friends and
                now it is a live platform. I built this with state-of-the-art UI
                along with features like a payment gateway and authentication,
                etc. Zustand is used for state handling.
              </small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
