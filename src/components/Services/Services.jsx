import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
           
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the User experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and Maintaining the User interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating custom Icons, SVGs by Adobe Illustrator</p>
            </li>
          
          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript/React and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Following SEO best practices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing software workflow.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
           
          </ul>

        </article>

     

      </div>
    </section>
  )
}

export default Services