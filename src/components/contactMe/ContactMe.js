import React from 'react'
import "./contactMe.scss"

const ContactMe = () => {
  return (
    <section id="contact" className='contactMe'>
        <p className='contactMe__subHeading'>04. What’s Next?</p>
        <h3 className='contactMe__heading'>Get In Touch</h3>
        <p className='contactMe__p'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a className='contactMe__btn'  href="mailto:anshumantalukdar02@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
    </section>
  )
}

export default ContactMe