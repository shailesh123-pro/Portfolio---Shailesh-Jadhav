import React from 'react'
import './portfolio.css'
import dmc from '../../assests/News Application.png'
import NM from '../../assests/NM.png'
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
          <h3>News Application</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/shailesh123-pro/NewsApp" className='btn' target="_blank">GitHub</a>
          {/* <a href="https://techspy.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NM} alt="" />
          </div>
          <h3>Note Reminder</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/shailesh123-pro/inotebook" className='btn' target="_blank">GitHub</a>
          {/* <a href="https://monumental-swan-077d2d.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio