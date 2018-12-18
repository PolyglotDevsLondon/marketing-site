import React from 'react'
import './navBar.css'

import NavButton from './navButton'

const NavBar = props =>
  <div className='navBar'>
    <div className='navBarButtons'>
      <NavButton page='Home' />
      <NavButton page='About' />
      <NavButton page='Contact' />
    </div>
  </div>

export default NavBar
