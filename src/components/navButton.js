import React from 'react'
import './navBar.css'

import { Link } from 'gatsby'

const NavButton = props =>
  <Link
    to={'/' + props.page}

  >
    <span className='navButton'>{props.page}</span>
  </Link>

export default NavButton
