import React, { Component } from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import AboutUs from '../components/about/aboutUs'

import './about.css'

class AboutPage extends Component {
  state = {

  }
  render () {
    return (
      <Layout>
        <div className='about-container'>
          <h3>About Polyglot Devs London</h3>
          <AboutUs />
        </div>
      </Layout>
    )
  }
}


export default AboutPage
