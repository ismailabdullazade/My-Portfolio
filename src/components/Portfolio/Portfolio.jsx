import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/nike_screen1.png'
import IMG2 from '../../assets/Screenshot_ytb.png'
import IMG3 from '../../assets/Screenshot 2023-04-26 224013.png'
import IMG4 from '../../assets/QR_code.jpg'
import IMG5 from '../../assets/password attacks.jpg'
import IMG6 from '../../assets/qr_generate.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Nike Store</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade/Nike-Store" className='btn' target="_blank">Github</a>
            <a href="https://nikegi-82fd80.netlify.app" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>YouTube App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade/YouTube-Clone" className='btn' target="_blank">Github</a>
            <a href="https://youtube-clone-gi.netlify.app/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Fenix Global Foundation</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade" className='btn' target="_blank">Github</a>
            <a href="https://fenix-global-foundation.com/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>QR Code Reader Mobile</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade/QR-Code-Reader" className='btn' target="_blank">Github</a>
            <a href="https://moonlit-semifreddo-d35a7e.netlify.app/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Password Validation (RegE)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade/Password-Validation-RegEx" className='btn' target="_blank">Github</a>
            <a href="https://bucolic-arithmetic-311c33.netlify.app/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>QR Code Generator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade/QR-Code-generator" className='btn' target="_blank">Github</a>
            <a href="https://peppy-hamster-57fba0.netlify.app/" className='btn btn-primary' target="_blank">Live</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ismailabdullazade" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio