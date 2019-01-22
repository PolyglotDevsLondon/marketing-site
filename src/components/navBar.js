import React from 'react'
import './navBar.css'

import NavButton from './navButton'

const NavBar = props =>
  <div className='navBar'>
    <div className='navBarButtons'>
      <NavButton page='home' />
      <NavButton page='about' />
      <NavButton page='contact' />
    </div>
  </div>

export default NavBar
