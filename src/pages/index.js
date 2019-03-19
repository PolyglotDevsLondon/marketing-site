import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Image from '../components/image'

import './index.css'


const IndexPage = () => (
  <Layout>
    <div className="main-content">
      <div className="students">
        <h3>Students</h3>
        <p>Our students are a mixture of backgrounds and skills, some are just starting to code and 
          some are already engineers working on expanding their skillset. No previous coding experience 
          is nessesary but it will mean that initially you will spend time working on tutorials and 
          playing with different tech before starting on your first ticket towards our two projects: Polyglot 
          Devs website > React / Gatsby / JavaScript / CSS / HTML / Netlify > Simple website to share our 
          initiaive with the world (ps. it is this website!) Sharespots web app > Python / Django / Sass / 
          HTML / JavaScript / Heroku > Co-working spaces in London listings app, curated by the PolyglotDevs 
          London team complete with ratings and venue information.</p>
      </div>
      <div className="mentors">
        <div className="container">
          <h3>Mentors</h3>
          <p>We are always on a lookout for more mentors. Some mentors are even students at certain sessions 
          especially as some events may be a little quiet for a mentor if students are busy giving a go alone. 
          If you are thinking of becoming a mentor but are not sure, please apply to mentor if: > You are an 
          experienced coder in any of the following: Python / Django / JavaScript / React / Sass / HTML > 
          You enjoy helping others and collaborating > You are patient and don’t mind going over the same 
          concept multiple times if needed That is all! The rest can be picked up as we go along. If this sounds 
          appealing please join us.</p>
        </div>
      </div>
     </div>
  </Layout>
)

export default IndexPage
