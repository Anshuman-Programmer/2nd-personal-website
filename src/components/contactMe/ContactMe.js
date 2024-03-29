import React from 'react'
import "./contactMe.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactMe = () => {
  return (
    <section id="contact" className='contactMe'>
      <p className='contactMe__subHeading'>04. What’s Next?</p>
      <h3 className='contactMe__heading'>Get In Touch</h3>
      <p className='contactMe__p'>Drop me an email or even better just call me (848-643-1724), my inbox is always open. I am also available in different social platforms. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <a className='contactMe__btn' href="mailto:anshumantalukdar02@gmail.com" aria-label="Email" rel="noopener noreferrer" target="_blank">Say Hello</a>
      <ul className='contactMe__socialmedia'>
        <li className='socialmedia__links'>
          <a className='socialmedia__link' target="_blank" aria-label="Linkedin" href='https://www.linkedin.com/in/anshuman-talukdar/'><LinkedInIcon /></a>
        </li>
        <li className='socialmedia__links'>
          <a className='socialmedia__link' target="_blank" aria-label="Github" href='https://github.com/anshuman-Programmer/'><GitHubIcon /></a>
        </li>
        <li className='socialmedia__links'>
          <a className='socialmedia__link' target="_blank" aria-label="Instagram" href='https://www.instagram.com/vexrgfx/'><InstagramIcon /></a>
        </li>
        <li className='socialmedia__links'>
          <a className='socialmedia__link' target="_blank" aria-label="Twitter" href='https://twitter.com/anshutalukdar'><TwitterIcon /></a>
        </li>
      </ul>
    </section>
  )
}

export default ContactMe