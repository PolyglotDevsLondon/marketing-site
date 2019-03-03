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
      </div>
      <div className="mentors">
        <h3>Mentors</h3>
        </div>
      </div>
  </Layout>
)

export default IndexPage
