import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'

import Header from './header'
import Navbar from './navbar'
import Footer from './footer'


import './layout.css'
import './header.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Polyglot Devs Marketing Site' },
            { name: 'keywords', content: 'polyglot, devs, marketing, site, react, gatsby' },
            { name: 'viewport', content: 'width=device-width, initial-scale:1.0'},
          ]}
        >
          <html lang="en" />
        </Helmet> 
        
        <Header siteTitle={data.site.siteMetadata.title} />
       
        <div>
          
            {children}
          
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
