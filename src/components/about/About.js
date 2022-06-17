import React from 'react'
import "./about.scss"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {

  return (
    <section id="about" className='about'>
      <h2 className='about__heading'>About Me</h2>
      <div className='about__container'>
          <div className='about__left'>
              <div className='about__leftp'>
                  <p>Hello! My name is Anshuman and I enjoy building things that live on the web. My interest in web development started back in 2020 when I decided to make a website from my design service which taught me a lot about HTML & CSS!</p>
                  <p>Fast-forward to today, and I’ve had the privilege of working at a start-up where I got the chance to build a product for a  huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.</p>
                  <p>Here are a few technologies I’ve been working with recently:</p>
              </div>
              <ul className='about__skills'>
                <li className='about__skill'>JavaScript (ES6+)</li>
                <li className='about__skill'>React</li>
                <li className='about__skill'>Next js</li>
                <li className='about__skill'>TypeScript</li>
                <li className='about__skill'>Gastpy</li>
                <li className='about__skill'>Scss</li>
              </ul>
          </div>
          <div className='about__right'>
            <StaticImage layout="constrained" width={200} src={"../../images/logo.svg"} alt="Project"/>
          </div>
      </div>
    </section>
  )
}

export default About