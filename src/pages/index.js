import React from "react"
import About from "../components/about/About"
import ContactMe from "../components/contactMe/ContactMe"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import NoteProjects from "../components/noteProject/NoteProjects"
import Projects from "../components/projects/Projects"
import SideEmail from "../components/sideEmail/SideEmail"
import Socialmedia from "../components/socialmedia/Socialmedia"
import Work from "../components/work/Work"
import '../styles/globle.scss'
import {Helmet} from "react-helmet";

export default function Home() {
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Anshuman Talukdar</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    <Navbar/>
    <Hero/>
    <Socialmedia/>
    <SideEmail/>
    <About/>
    <Work/>
    <Projects/>
    <NoteProjects/>
    <ContactMe/>
    <Footer/>
  </>
}
