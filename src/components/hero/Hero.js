
import { motion } from "framer-motion";
import { Link } from 'gatsby'
import React from 'react'
import "./hero.scss"

const Hero = () => {

    const variants = {
        visible: {
            transition: { 
                staggerChildren: 0.1,
            }
        },
        hidden: {
            transition: { 
              staggerChildren: 0.1,
            },
        }
    };
    const heroAnimation = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                duration: 0.5
            }          
        }
    }

  return (
    <section className='hero'>
        <motion.div variants={variants} animate="visible" initial="hidden" transition={{ delay: 1}} className='hero__container'>
            <motion.h4 variants={heroAnimation} className='hero__starter'>Hi, my name is</motion.h4>
            <motion.h1 variants={heroAnimation} className='hero__main'>Anshuman Talukdar.</motion.h1>
            <motion.h3 variants={heroAnimation} className='hero__submain'>I build things for the web.</motion.h3>
            <motion.p variants={heroAnimation} className='hero__des'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</motion.p>
            <motion.span variants={heroAnimation}>
                <Link to="#contact" className='hero__btn'>Contact Me</Link>
            </motion.span> 
        </motion.div>
        
    </section>
  )
}

export default Hero