import React from 'react'
import ProfilePicture from '../resources/images/Profile_Picture.JPG'

export default function About() {

  return (
    <>
      <div className='section' id='about'>
        <div className="sub-section image">
          <h2>About me</h2>
          <div className='image'>
            <img
              src={ProfilePicture}
              alt="picture of Henry (Me!)"
              id="ID_pic"
            />
          </div>
          
        </div>
        <div className="sub-section text">
          <p>
            <strong>Who am I?</strong>
            <br />
            Recent graduate from the University of Michigan - Ann Arbor, with a
            B.S.E. in computer science. As the go-to "tech-wizz" of my household growing
            up, as well as an avid enjoyer of video games, I am greatly passionate
            about software engineering and learning more about technology. 
            <br />
            I am a software engineer with experience with both frontend (HTML/CSS,
            JavaScript, React, Jinja) as well as backend(Flask, SQLite, Rest API).
            <br />
            I'm also a game developer, where I've worked primarily with Unity as a UI/UX
            and gameplay programmer, but I also have experience with QA, enemy &amp;
            level design through solo and smaller team game projects.
            <br />
          </p>
        </div>
        <div className="sub-section text">
          <strong>My goals</strong>
            <br />
            I am currently looking for full-time opportunities as a software engineer.
            For game development, I am currently looking at roles in UI/UX and
            gameplay programming.
            <br />
            <br />
        </div>
        <div className="sub-section text">
          <strong>My interests</strong>
            <br />
            I enjoy playing video games in my free-time, from long-time favorites such
            as Pokemon and Megaman to more recent interest such as the Fire Emblem
            series and Apex Legends.
            <br />
            On that same note, I also enjoy developing games, where a notable
            experience includes my role as a programmer on the student-run
            WolverineSoft Studio during the Winter 2023 cycle, as well as smaller
            titles such as Cavelit and Gacha Slimes. It's definitely empowering to be
            able to learn and work towards making games that feel good and emulate my
            own fun experiences playing video games, where I find particular enjoyment
            in being able to look at exisitng games through the lens of a game
            developer. Questions like "how did they make this jump feel so good?" and
            "how did they implement this pathfinding system that considers height and
            non-linear paths?" now pop-up and, in my opinion, further enrich my
            enjoyment of video games as a medium.
            <br />
            Front-end development development scratches a similar itch for me, where I
            enjoy making user experiences that look and feel good, and learning more
            about how to do so.
            <br />
            Outside of "tech-y" interests, I enjoy biking and exploring cities and
            nature. I also enjoy reading and building model-kits (e.g. Gupla).
        </div>
      </div>
      <br></br>
    </>
    
  )
}
