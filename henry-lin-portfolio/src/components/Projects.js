import React from 'react'
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
                  Light Drifter, a 2.5D hack and slash game. Play as a pirate under a
                  myserious curse, venturing to the seek the cure and change his fate.
                </p>
                <p>
                  The game was developed using the Unity Engine and using Bitbucket for
                  version control. The team also share documentation and assets using
                  Confluence, and kept track of tasks and bugs using Jira. Development
                  was conducted within Agile-style sprints, which primairly consisted of
                  two weeks of feature implementation followed by a QA week. I
                  contributed as part of the programming department, as well as part of
                  the UI/UX feature team. I was responsible for elements of the main
                  HUD, such as player health, ammo, and stamina displays, as well as
                  weapon and inventory UI. I also worked to implement currency pickup
                  popups, as well as the interaction UI. Additionally, I assisted in QA
                  and art integration, not limited to bugfixing, adding hud shake and
                  visual effects to indicate player damage, as well as working with the
                  art deparment to get player shooting and projectile animations
                  integrated.
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
                    Cavelit is a 2D platformer game, developed by a 5 person team for EECS
                    494. It also includes freelance contributions for music, SFX, and
                    voicing. You play as Bob, a miner who has be caught in a cave-in, and
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
                  experiences such as VR Home, as well a shared interest in space with
                  group members. My personal contributions greyboxing and contributing
                  to the planning of activites interior ISS scene, as well as obtaining
                  intial models for the exterior ISS and Earth. I also worked to
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
          
          {/* entry */}
          {/* CSE Simulator entry */}
          <div className='gameContainer'>
            <div className="game">
              <div>
                {/*<img src="" alt="CSE Simulator thumbnail" class="game_thumbnail">*/}
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/ACC4Z46eS-w"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <h3>CSE Simulator</h3>
              </div>
              
              <div>
                <em>
                  VR simulation of an infamous computer lab on the University of Michigan campus.
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
                    CSE Simulator is a VR project created loosely in the image of the
                    computer lab located in the Bob and Betty Beyster Building. Built
                    through the Unreal game engine, it features use of Unreal's blueprint
                    scripting and use of various external assets to create an unique and
                    interactive environment. This was my first project in EECS 498 -
                    Extended Reality and Society.
                  </p>
                  <p>
                    The game was developed using the Unreal Engine. Working with a
                    partner, we created a virtual environment that loosely recreates the
                    computer lab located in room 1695 BBB. My personal contributions
                    include mapping out the room layout and scale, importing and working
                    to integrate external 3D models and materials, creating the NPCs and
                    3D dialogue popups, as well as the copy machine. I also worked to
                    integrate SFX, lighting that worked with the interactive fire alarm
                    system, and time passage that occured with every interaction.
                  </p>
                </div>
              </details>
                
            </div>{" "}  
          </div>
          
          {/* entry */}
          {/* Gacha Slimes entry */}
          <div className='gameContainer'>
            <div className="game">
              <a
                href="https://henrlin24.itch.io/gacha-slimes"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={gachaslime_thumbnail}
                  alt="Gacha Slimes game thumbnail"
                  className="game_thumbnail"
                />
                <h3>Gacha Slimes</h3>
              </a>
                          
              <div>
                <em>
                  2D action platformer, inspired from the Kirby and Megaman games. 
                  ...and my love of gacha games.
                </em>
              </div>
              <br />

              <details>
                <summary>Learn more!</summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>C#, Unity, Github, Jira
                </p>
                <p>
                  <strong>Description: </strong>
                  Gacha Slimes is a 2D platformer, and is the second project I made for
                  EECS 494. The game was created individually by me, but does make use
                  of free visual and audio assets. The core idea behind the game behind
                  the game is to create a platformer that has a core "gacha" mechanic
                  that would change the way that players progress through the levels.
                </p>
                <p>
                  The game was developed using the Unity Engine. Specific contributions
                  from me include creating movement and attack scripts, prefabs for the
                  slime enemies and interactable objects in the levels, as well as scene
                  management scripts. The UI was also a major part of development, where
                  I implemented UI elements linked to the game objects by making use of
                  an Eventbus scheme. The "gacha" sequence involved making use of
                  coroutines to play out the "animations" and pausing the game in the
                  background when the gacha interface was active. Core mechanics and
                  game level design, as well as the corresponding playtest and feedback,
                  were also major parts of my development process. Changes were kept
                  track of using a Github repository, as well as Jira to keep track of
                  tasks.
                </p>
                </div>
              </details>
              
            </div>{" "}  
          </div>
          
          {/* entry */}
          {/* Custom LOZ entry*/}
          <div className='gameContainer'>
            <div className="game">
              <a
                href="https://henrlin24.itch.io/legend-of-zelda-dont-move"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={loz_thumbnail}
                  alt="Legend of Zelda Custom game thumbnail"
                  className="game_thumbnail"
                />
                <h3>NES Legend of Zelda remake</h3>
              </a>
                                      
              <div>
                <em>
                  Remake of a level from the nostalgic NES title Legend of Zelda, 
                  with a custom mechanics and level.
                </em>
              </div>
              <br />

              <details>
                <summary>Learn more!</summary>
                <div className="description">
                <p>
                  <strong>Technologies: </strong>C#, Unity, Plastic SCM, Jira
                </p>
                <p>
                  <strong>Description: </strong>
                  This is a Legend of Zelda clone, created with a partner as the first
                  project in EECS 494. This involved remaking the first dungeon of the
                  original NES game, including the enemies, traps, and weapons
                  availiable at that point in the game. Additionally, we also
                  implemented our own custom mechanic and level — a moving laser
                  obstacle that only damages the player when they are moving, inspired
                  by a similar mechanic featured in Undertale.
                </p>
                <p>
                  My specific contributions to this project include the implementation
                  of the Keese (the bat enemies), which involved a randomized non-grid
                  based movement different from the other enemies, as well as Aquamentus
                  (the boss) and the Wallmaster enemies (the hands that grab the player,
                  sending them to the beginning of the dungeon). I implemented many of
                  the environmental aspects of the game. Water tiles, pushable blocks,
                  locked doors &amp; keys, pickups, and room transition sequences are
                  among this list. Other core gameplay elements I worked include player
                  health and UI, the implementation of god mode (cheat mode, allows for
                  easier time testing), as well as contributing towards the custom
                  mechanic and level design. I notably implemented the starting tutorial
                  sequence of the custom level.
                </p>
                </div>
              </details>
              
            </div>{" "}  
          </div>
          
          {/* entry */}
        </div>
      </div>
      
      <br />
    </>
  )
}
