import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import './index.css' 

const IndexPage = () => (
  <Layout>
  <div className="main-content">
    <div className="students"><h2>Students</h2></div>
    <div className="mentors"><h2>Mentors</h2></div>
  </div>


  </Layout>
)

export default IndexPage
