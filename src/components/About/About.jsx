import React from 'react';
import "./about.css";
// import ME from "../../assets/me-about.jpg"
import ME from "../../assets/iso.jpeg"
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';
// import {AiOutlineCaretDown} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Listed down</small>
              {/* <AiOutlineCaretDown className='about__icon'/> */}
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>The State Customs Committee , A+A Group Of Companies , Hacklab , Miner.az , Fenix Global Foundation, Data City, Dine Restaurant, Veysəloğlu.</p>

          <a className='btn btn-primary' href="#contact">Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About