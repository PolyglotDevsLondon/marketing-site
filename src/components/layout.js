import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'


import Footer from './footer'


import './layout.css'


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
      <div className="container">
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
        
       
        <div>
          
            {children}
          
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
