import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'
import laptop from '../images/laptop.svg'

import './partners.css'


const PartnersPage = () => (
  <div>
    <div className="wrapper">
      <Navbar />
      <Header subTitle="How you can support us" />
    </div>

    <Layout>
      
      <div className="main">
          <div className="venue">
            <h3>Venue</h3>
            <p>We are always on a look out for places to meet. If you think you can offer us a space please get in touch below.</p>
            <p>What do we need:</p>
            <ul>
              <li>&gt; Wi-Fi;</li>
              <li>&gt; Tables to work;</li>
              <li>&gt; Refreshments are always welcome!;</li>
            </ul>
          <div>
            <a href="https://lilianakastilio.typeform.com/to/MUBtwK" target="_blank">
            <button className="signup-btn" type="button">Get in touch</button></a>
          </div>
          </div>
          <img className="laptop-image" src={laptop} />
          <div className="partners-section">
            <h3>Our Partners</h3>
          </div>
      </div>
      
    </Layout>
    </div>
)

export default PartnersPage