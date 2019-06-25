import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'



const SponsorsPage = () => (
  <div>
  <div className="wrapper">
  <Navbar />
  <Header subTitle="Our sponsors" />
  </div>

  <Layout>
  <div className="sponsors">
    <h3>Our Sponsors</h3>
  </div>
  </Layout>
  </div>
)

export default SponsorsPage