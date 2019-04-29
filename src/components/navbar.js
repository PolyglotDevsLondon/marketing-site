import React from 'react'
import { Link } from 'gatsby'

import './navbar.css'

const Navbar = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>
)

export default Navbar
