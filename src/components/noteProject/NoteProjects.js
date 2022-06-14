

import React from 'react'
import "./noteProjects.scss"
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const SingleNoteProjects = () => {
  return (
    <div className='singleNoteProjects'>
      <div className='singleNoteProjects__top'>
        <DriveFileMoveOutlinedIcon />
        <div className='singleNoteProjects__links'>
          <a className='singleNoteProjects__link'><FileUploadOutlinedIcon/></a>
          <a className='singleNoteProjects__link'><GitHubIcon/></a>
        </div>
      </div>
      <div className='singleNoteProjects__mid'>
        <h4 className='singleNoteProjects__head'>Other Noteworthy Projects</h4>
        <p className='singleNoteProjects__p'>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
      </div>
      <div className='singleNoteProjects__but'>
        <span className='singleNoteProjects__a'>React</span>
        <span className='singleNoteProjects__a'>Express</span>
        <span className='singleNoteProjects__a'>Spotify API</span>
      </div>
    </div>
  )
}

const NoteProjects = () => {
  return (
    <section className='noteProjects'>
      <h3 className='noteProjects__heading'>Other Noteworthy Projects</h3>
      <div className='noteProjects__grid'>
        <div>
          <SingleNoteProjects/>
        </div>
        <div>
          <SingleNoteProjects/>
        </div>
        <div>
          <SingleNoteProjects/>
        </div>
        <div>
          <SingleNoteProjects/>
        </div>
        <div>
          <SingleNoteProjects/>
        </div>
        <div>
          <SingleNoteProjects/>
        </div>
      </div>
    </section>
  )
}

export default NoteProjects