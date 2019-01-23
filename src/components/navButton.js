import React from 'react'

import { Link } from 'gatsby'

import './navBar.scss'

const NavButton = props =>
  <Link
    to={'/' + props.page}

  >
    <span className='navButton'>{props.page.charAt(0).toUpperCase() + props.page.slice(1)}</span>
  </Link>

export default NavButton
