import React from 'react'
import "./sideEmail.scss"
import { motion } from "framer-motion";

const SideEmail = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} className='sideEmail'>
      <a className='sideEmail__email' aria-label='Email' href="mailto:anshumantalukdar02@gmail.com" rel="noopener noreferrer" target="_blank">anshumantalukdar02@gmail.com</a>
      <span></span>
    </motion.div>
  )
}

export default SideEmail