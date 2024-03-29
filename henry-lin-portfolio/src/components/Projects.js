import React from 'react'
import tailsofwar_thumbnail from '../resources/images/thumbnails/TailsOfWar.png'
import corsair_thumbnail from '../resources/images/thumbnails/CurseOfTheCorsair.png'
import cavelit_thumbnail from '../resources/images/thumbnails/CavelitGif.gif'
import orbitvr_thumbnail from '../resources/images/thumbnails/OrbitVRGif.gif'
import gachaslime_thumbnail from '../resources/images/thumbnails/GachaSlimes.png'
import loz_thumbnail from '../resources/images/thumbnails/LOZ_Custom.png'

// TODO - abstract each project entry into project objects that can be easily added
export default function Projects() {
  return (
    <>
      <div className="section" id="projects">
        <h2>Projects</h2>
        <p>Featured below is a selection of some of my projects.</p>
        <p>
          Click the project thumbnails or titles to play! Note: non-VR titles only.
        </p>
        <div className="games">
          {/* Tails of War entry */}
          <div className='gameContainer'>
            <div className="game">
            <a
              href="https://wolverinesoft-studio.itch.io/tails-of-war"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={tailsofwar_thumbnail}
                alt="Tails of War game thumbnail"
                className="game_thumbnail"
              />
              
              <h3>Tails of War</h3>
            </a>

            <div>
              <em>
                3D turn-based strategy game, supporting both single-player and multiplayer play. 
                <br />
                Made as part of WolverineSoft Studio.
              </em>
            </div>
            <br />

            <details>
              <summary>
                Learn more!
              </summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>C#, Unity, Photon, SourceTree, Jira,
                  Confluence, Bitbucket
                </p>
                <p>
                  <strong>Description: </strong>
                  Tails of War is a 3D turn-based strategy game inspired by the likes of Wargroove, Advanced Wars, and Fire Emblem. 
                  Players are able to battle it out with unique champions, different unit types with different strengths and weaknesses, and make use of special landmarks and pickups to gain an edge. 
                  Can you lead your army of felines to victory?
                </p>
                <p>
                  This game was developed over two development cycles. both of which I contributed to. 
                  <br />
                  <br />
                  The first took place over the summer (May - August 2023), and focused on developing a core multiplayer framework using the Photon Engine for Unity. 
                  I implemented the core gameplay system that would initialize the game (from setting up the initial player states to deciding which player went first), 
                  as well as handling turn progression and handoff between players. 
                  This system was built in with the incorporation of subsequent gameplay features in mind, which could interact with the different stages of turn progression. 
                  I implemented several early features that worked with the turn-based system in this manner, including the city capture mechanic implementation, which relied on counters that incremented every turn, as well as setup for possible win conditions. 
                  Another aspect of my contributions in this first half of development included handling the networking aspects of the game. 
                  This included syncing of player and unit data across clients, as well as handling disconnection and reconnection behavior for players.
                  <br />
                  <br />
                  The second and last half of developement took place over the fall (September - December 2023) and focused on improving the gameplay and aesthetics of the game. 
                  My contributions include assisting with incorporating terrain types, implementing extra buffs through "Artifacts of Power" that could empower a unit further on pickup, 
                  and notably proposing and building a custom map editor tool. The tool came about due to my interest in creating custom developer tools and trying out Unity's UI Toolkit system, 
                  and observing a lack of an easy way to create and modify custom maps for the game. After various prototypes and iterations guided by feedback from interested designers and fellow developers, 
                  my tool has since been incorporated to support over 8 different tile types and create 5+ custom game maps.
                  <br />
                  <br />
                  Check out the{" "}
                  <a
                    href="https://wolverinesoft-studio.itch.io/tails-of-war"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    itch.io page here.
                  </a>
                  <br />
                </p>
                </div>
            </details>
            </div>{" "}
          </div>

          {/* Curse of the Corsair entry */}
          <div className='gameContainer'>
            <div className="game">
            <a
              href="https://store.steampowered.com/app/2365570/Curse_of_the_Corsair/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={corsair_thumbnail}
                alt="Curse of the Corsair game thumbnail"
                className="game_thumbnail"
              />
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/kFhyNzARlBA"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
              <h3>Curse of the Corsair</h3>
            </a>

            <div>
              <em>
                2D action adventure RPG, inspired by Hyper Light Drifter. 
                <br />
                Made as part of WolverineSoft Studio.
              </em>
            </div>
            <br />

            <details>
              <summary>
                Learn more!
              </summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>C#, Unity, SourceTree, Jira,
                  Confluence, Bitbucket
                </p>
                <p>
                  <strong>Description: </strong>
                  Curse of the Corsair is a rethemed case study of the hit game Hyper
                  Light Drifter, a 2.5D action-adventure game. Play as a pirate under a
                  myserious curse, venturing to the seek the cure and change his fate.
                </p>
                <p>
                  The game was developed using the Unity Engine and using Bitbucket for
                  version control. The team also shared documentation and assets using
                  Confluence, and kept track of tasks and bugs using Jira. Development
                  was conducted within Agile-style sprints, which primarily consisted of
                  two weeks of feature implementation followed by a QA week. I
                  contributed as part of the programming department, as well as part of
                  the UI/UX feature team. I was responsible for elements of the main
                  HUD, such as player health, ammo, and stamina displays, as well as
                  weapon and inventory UI. I also worked to implement currency
                  popups, as well as the interaction UI. Additionally, I assisted in QA
                  and art integration, not limited to bugfixing, adding hud shake & 
                  visual effects to indicate player damage, as well as working with the
                  art team to get player shooting and projectile animations integrated.
                  <br />
                  <br />
                  Check out the{" "}
                  <a
                    href="https://wolverinesoft-studio.itch.io/curse-of-the-corsair"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    itch.io page here
                  </a>
                  , or{" "}
                  <a
                    href="https://store.steampowered.com/app/2365570/Curse_of_the_Corsair/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    the Steam page here.
                  </a>
                  <br />
                  Feel free to also check out my development blog for this project{" "}
                  <a href="wsoftstudioblog.html">here!</a>
                </p>
                </div>
            </details>
            </div>{" "}
          </div>
          {/* entry */}
          {/* Cavelit entry */}
          <div className='gameContainer'>
            <div className="game">
              <a
                href="https://henrlin24.itch.io/cavelit"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={cavelit_thumbnail}
                  alt="Cavelit game thumbnail"
                  className="game_thumbnail"
                />
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/oizey1BYwk4"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <h3>Cavelit</h3>
              </a>

              <div>
                <em>
                  2D platformer with a focus on navigating through a perilous cavern.
                </em>
              </div>
              <br />

              <details>
                <summary>Learn more!</summary>
                  <div className="description">
                  <p>
                    <a href="https://github.com/Gorgeous-Patrick/HosicoGameProject3">
                      GitHub repo link!
                    </a>
                    <br /><br />
                    <strong>Technologies: </strong>C#, Unity, Github, Jira
                    
                  </p>
                  <p>
                    <strong>Description: </strong>
                    Cavelit is a 2D platformer game, developed by a team of 5 for EECS
                    494. It also includes freelance contributions for music, SFX, and
                    voicing. You play as Bob, a miner who has been caught in a cave-in. 
                    With limited resources and treacherous terrain, you 
                    need to find a way out of the depths.
                  </p>
                  <p>
                    The game was developed using the Unity Engine. My personal
                    contributions include creating the initial dynamite implementation,
                    the player death sequence, the iniital dynamite and dynamite pickups,
                    scene transitions, the title and ending screens, work on the UI
                    (including the battery/health positioning to follow the player,
                    implementing the dynamite counter, and the player life counter that is
                    shown in the death sequence). I also contributed to level design in
                    the form of initial ideas, general tweaks like darkness level and
                    ambient player lighting, as well as pre-deliverable quality checks.
                    The game trailer and development blogs were also put together by me,
                    which are featured on{" "}
                    <a
                      href="https://henrlin24.itch.io/cavelit"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      the Cavelit itch.io page
                    </a>{" "}
                    and <a href="https://www.indiedb.com/members/eratos/blogs">IndieDB</a>{" "}
                    &amp;{" "}
                    <a href="https://forums.tigsource.com/index.php?topic=73888.msg1453812#msg1453812">
                      TIGForums
                    </a>{" "}
                    respectively.
                  </p>
                  </div>
              </details>
              
            </div>{" "}  
          </div>

          {/* entry */}
          {/* OrbitVR entry */}
          <div className='gameContainer'>
            <div className="game">
              <a
                href="https://whodson6.wixsite.com/eecs-498-spacewalk"
                target="_blank"
                rel="noreferrer noopener"
              >
                {/*<img src="" alt="Orbit VR thumbnail" class="game_thumbnail">*/}
                <img src={orbitvr_thumbnail} />
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/xCc2whpVdC0?si=_lb8ilnutuRszC5G"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <h3>Orbit VR</h3>
              </a>

              <div>
                <em>
                  VR simulation of the ISS and space, built using Unreal. 
                </em>
              </div>
              <br />

              <details>
                <summary>Learn more!</summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>Unreal, Github, Jira
                </p>
                <p>
                  <strong>Description: </strong>
                  Orbit VR is the final project for the 498 XR and Society course. It is
                  A VR experience aiming to provide an immersive simulation of the life
                  of an astronaut on the ISS. The target audience are younger students,
                  with the goal of inspiring more interest in STEM and space-related
                  fields, as well as and exploring how VR can be applied educationally.
                </p>
                <p>
                  The game was developed using the Unreal Engine with assets found
                  primarily on Sketchfab as well as assets from official NASA
                  repositories for the ISS. The project was inspired by existing
                  experiences such as VR Home, as well as the team's shared interest in space. 
                  My personal contributions include greyboxing and assisting with the 
                  planning of activites interior ISS scene, as well as obtaining
                  models for the ISS environment and Earth. I also worked to
                  specifically implement the food hydration station, as well as getting
                  hand assets and animations integrated. Outside of the engine, I took
                  charge of devblog posts and worked on the product website:{" "}
                  <a
                    href="https://whodson6.wixsite.com/eecs-498-spacewalk "
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    OrbitVR
                  </a>
                </p>
                </div>
              </details>
              
            </div>{" "}  
          </div>
          
          {/* entry */}
          {/* a2go entry */}
          <div className='gameContainer'>
            <div className="game">
              <div>
                {/*<img src="" alt="a2 GO thumbnail" class="game_thumbnail">*/}
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/SOuxi2kFCUQ"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <h3>A2 GO</h3>
              </div>
              
              <div>
                <em>
                  AR game exploring the University of Michigan's North Campus, 
                  inspired by Pokemon GO.
                </em>
              </div>
              <br />

              <details>
                <summary>Learn more!</summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>Unity, Mapbox, Mixamo, Sketchfab,
                  Github, Jira
                </p>
                <p>
                  <strong>Description: </strong>
                  A2 Go is an AR project created in the image of Pokemon GO, where
                  instead players go about the city of Ann Arbor to plant seeds, grow
                  trees, and fend of the chunky Ann Arbor squirrels. Built through the
                  Unity game engine, this was my first project making use of real-time
                  location data to update in-game state. This was my second project in
                  EECS 498 - Extended Reality and Society.
                </p>
                <p>
                  The game was developed using the Unity Engine and the Mapbox SDK,
                  which helps track the user's location using GPS coordinates, updating
                  maps and in-game object locations in real time. Working with a
                  partner, we AR game loosely resembling the popular Pokemon GO mobile
                  game. My personal contributions include setup with the Mapbox SDK,
                  work on the UI/UX implementations, looking for and importing SFX and
                  assets &amp; 3D models for trees, squirrels, and acorns. I also worked
                  to implement landmarks and corresponding popups.
                </p>
                </div>
              </details>
              
            </div>{" "}  
          </div>
          
        </div>
      </div>
      
      <br />
    </>
  )
}
