import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'


import './header.css'
import '../components/navbar.css'


const Header = ({ siteTitle }) => (
    <div className="header">
      <div className="navbar">
          <Navbar />
      </div>
      <div>
        <h1 className="title">Polyglot Devs</h1>
      </div>
        <div className="box-container">
          <h2 className="box-text">Regular coding meetup in London</h2>
        </div>
    </div>
)

export default Header
