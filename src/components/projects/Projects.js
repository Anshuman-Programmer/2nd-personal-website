
import React from 'react'
import "./projects.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { featuredProjects } from '../../utils/projects';
import { StaticImage } from "gatsby-plugin-image"
import "../../images/doc.png"

const SingleProject = ({featuredProject}) => {

    return (
        <div className='singleProject'>
            <div className='singleProject__left'>
                <StaticImage height={600} src={`../../images/${featuredProject?.image}`}alt="Project"/>
            </div>
            <div className='singleProject__right'>
                <p className='singleProject__featured'>Featured Project</p>
                <h4 className='singleProject__heading'>{featuredProject.title}</h4>
                <div className='singleProject__pWrapper'>
                    <p className='singleProject__p'>{featuredProject.desc}</p>
                </div>
                <div className='skills__wrapper'>
                    {featuredProject.techs.map((tech, i) => (
                        <p className='skill' key={i}>{tech}</p>
                    ))}
                </div>
                <div className='skills__links'>
                    <a target="_blank" href={featuredProject.demo}><GitHubIcon/></a>
                    <a target="_blank" href={featuredProject.code}><LinkIcon/></a>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className='projects'>
        <h3 className='projects__heading'>Some Things I’ve Built</h3>
        <div className='projects__wrapper'>
            {featuredProjects?.map((featuredProject) => (
                <SingleProject key={featuredProject.id} featuredProject={featuredProject}/>
            ))}
        </div>
    </section>
  )
}

export default Projects