import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'
import AboutUs from '../components/about/aboutUs'

import './about.css'
import '../components/navbar.css'
import '../components/header.css'
import '../components/layout.css'



class AboutPage extends Component {
  state = {

  }
  render () {
    return (
      <div>
      <div className="wrapper">
      <Navbar />
      <Header subTitle="About us" />
      </div>
      <Layout>
        <div className='about-container'>
          <h3>About Polyglot Devs London</h3>
          <AboutUs />
        </div>
      </Layout>
      </div>
    )
  }
}


export default AboutPage
