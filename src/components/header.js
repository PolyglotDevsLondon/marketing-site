import React from 'react'
import { Link } from 'gatsby'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
      <h1 className="title">Polyglot Devs</h1>
    <div className="box-container">
      <div className="box-text">
        <h2>Montly coding meetup<br />in London</h2>
      </div>
    </div>
  </div>
)

export default Header
