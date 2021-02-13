import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'
import Image from '../components/image'

import triangles from '../images/triangles.svg'
import laptop from '../images/laptop.svg'

import './index.css'
import '../components/navbar.css'
import '../components/header.css'
import '../components/layout.css'


const IndexPage = () => (
  <div>
    <div className="wrapper">
      <Navbar />
      <img id="triangles" src={triangles} />
      <Header subTitle="Monthly coding meetup in London" showTitle={true} />
      <img id="laptop" src={laptop} />
    </div>
  
  <Layout>
    <div className="main-content">
      <div className="students">
        <h3>Students</h3>
        <p>Our students are a mixture of backgrounds and skills, some are just starting to code and 
          some are already engineers working on expanding their skillset.</p>
        <p> No previous coding experience is necessary but it will mean that initially you will spend time 
          working on tutorials and playing with different tech before starting on your first ticket towards 
          our two projects:</p>
        <p><strong>Polyglot Devs website</strong></p>
        <ul>
          <li>&gt; React / Gatsby / JavaScript / CSS / HTML / Netlify;</li>
          <li>&gt; Simple website to share our initiative with the world (ps. it is this website!);</li>
        </ul>
        <p><strong>Sharespots web app</strong></p>
        <ul>
          <li>&gt; Python / Django / Sass / HTML / JavaScript / Heroku;</li>
          <li>&gt; Co-working spaces in London listings app, curated by the PolyglotDevs London team 
            complete with ratings and venue information.</li>
        </ul>
      </div>
      <div className="mentors">
        <h3>Mentors</h3>
        <p>We are always on a lookout for more mentors. Some mentors are even students at certain sessions 
        especially as some events may be a little quiet for a mentor if students are busy giving a go alone.</p>
        <p>If you are thinking of becoming a mentor but are not sure, please apply to mentor if:</p>
        <ul>
          <li>&gt; You are an experienced coder in any of the following: Python / Django / JavaScript / React / 
            Sass / HTML;</li>
          <li>&gt; You enjoy helping others and collaborating;</li>
          <li>&gt; You are patient and don’t mind going over the same concept multiple times if needed;</li>
        </ul>
        <p>That is all! The rest can be picked up as we go along. If this sounds appealing please join us.</p>
      </div>
     </div>
  </Layout>
  </div>
  
)

export default IndexPage

