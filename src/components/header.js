import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header"
    style={{
      background: '#C0DAE9',
      marginBottom: '1.45rem',

    }}
  >
  <div className="nav-bar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className="title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#F9F7FA',
            textDecoration: 'none',
          }}
        >

          {siteTitle}
        </Link>

      </h1>
      <div className="box-container">
      <div className="box-text">Montly coding meetup in London
      </div>
      </div>
    </div>
  </div>
)

export default Header
