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
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href="/logo.svg" />
      <meta name="description" content="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am looking for new opportunities to grow as a professional."></meta>
      <meta name="keywords" content="Web, Software, Developer, Engineer, Anshuman, Talukdar"></meta>
      <meta name="author" content="Anshuman Talukdar"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
