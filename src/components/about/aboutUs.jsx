import React, { Component } from 'react'

import People from './people'

import './aboutUs.scss'

class AboutUs extends Component {
  state = {
    people: [
      {
        name: 'Ali Aziz',
        imgUrl: 'https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg',
        twitter: 'https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        job: 'full-stack developer'
      }
    ]
  }

  render () {
    const { people } = this.state
    return (
      <div className='about-us' >
        <h1>Meet the Team</h1>
        <People people={people}/>
      </div>
    )
  }
}

export default AboutUs
