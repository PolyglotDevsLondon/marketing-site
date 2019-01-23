import React from 'react'

import NavButton from './navButton'

import './navBar.scss'

const NavBar = props =>
  <div className='navBar'>
    <div className='navBarButtons'>
      <NavButton page='home' />
      <NavButton page='about' />
      <NavButton page='contact' />
    </div>
  </div>

export default NavBar
