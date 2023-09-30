import React from 'react'
import Button from './Button'

export default function Navbar() {
  const SECTIONS = ['About', 'Skills', 'Work Experience', 'Projects', 'Miscellaneous']

  return (
    <>
      <div id='navbar'>
        {SECTIONS.map(section => {
          return <Button name={section} />
        })}
      </div>
      <br></br>
    </>
  )
}
