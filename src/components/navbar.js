import React from 'react'
import { Link } from 'gatsby'


const Navbar = () => (
  <div style={{
    paddingTop: '10px',
  }}>
  <nav>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '15px',
      float: 'right',
      }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </div>
)

export default Navbar
