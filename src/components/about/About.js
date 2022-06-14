import React, { useEffect } from 'react'
import "./about.scss"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  const aboutMeAnimation = {
    hidden: {
        y: 60,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            duration: 0.5,
            delay: 1
        }            
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  

  return (
    <motion.section ref={ref} animate={controls} variants={aboutMeAnimation} initial="hidden" id="about" className='about'>
      <h2 className='about__heading'>About Me</h2>
      <div className='about__container'>
          <div className='about__left'>
              <div className='about__leftp'>
                  <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                  <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                  <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                  <p>Here are a few technologies I’ve been working with recently:</p>
              </div>
              <ul className='about__skills'>
                <li className='about__skill'>JavaScript (ES6+)</li>
                <li className='about__skill'>React</li>
                <li className='about__skill'>Next js</li>
                <li className='about__skill'>TypeScript</li>
                <li className='about__skill'>Node js</li>
                <li className='about__skill'>Scss</li>
              </ul>
          </div>
          <div className='about__right'>
              
          </div>
      </div>
    </motion.section>
  )
}

export default About