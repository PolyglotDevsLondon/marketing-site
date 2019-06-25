import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = () => (
  <div className="footer">
     <div className="footer-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <h6>Created by Polyglot Devs London</h6>
      <div className="twitter">
        <a href="https://twitter.com/devs_london" target="_blank"><p>@devs_london</p></a>
      </div>
  </div>
)

export default Footer
