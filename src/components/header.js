import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'


import './header.css'
import '../components/navbar.css'


const Header = ({ subTitle, showTitle=false }) => {
  if (showTitle){
    return (
      <div className="header">
        <div>
          <h1 className="title">Polyglot Devs</h1>
        </div>
          <div className="box-container">
            <h2 className="box-text">{subTitle}</h2>
          </div>
      </div>
      )
  }
  return (
    <div className="header">
      <div className="box-container">
        <h2 className="box-text">{subTitle}</h2>
      </div>
    </div>
    )
}

export default Header
