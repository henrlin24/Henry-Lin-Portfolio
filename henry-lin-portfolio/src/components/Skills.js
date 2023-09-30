import React from 'react'
import resume from '../resources/henrylinResume.pdf'
import resume_icon from '../resources/images/icons/resume_icon.svg'
import github_icon from '../resources/images/icons/github-mark-white.svg'

export default function Skills() {
  const GITHUB = 'https://github.com/henrlin24'
  return (
    <>
      <div className="section" id="skills">
        <h2>Skills</h2>
        <div id="external_links">
          <a href={resume}>
            <img className='icon' src={resume_icon}></img>
          </a>
          <a href={GITHUB}>
            <img className='icon' src={github_icon}></img>
          </a>
        </div>
        <div>
          <p>
            <strong>Programming Languages: </strong>
            C++, C#, JavaScript, MATLAB, Python, Visual Basic
          </p>
        </div>
        <div>
          <p>
            <strong>Frameworks and software: </strong>
            Unity, Unreal, Flask, Git, Github, HTML/CSS, Jinja, Jira, React,
            SourceTree, SQLite, Visual Studio Code, Visual Studio
          </p>
        </div>
      </div>
      <br></br>
    </>
  )
}
