import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

class Person extends Component {
  render () {
    const { name, imgUrl, twitter, job } = this.props.person
    console.log(imgUrl)
    return (
      <div className='person'>
        <div className='profile-picture'>
          <img src={imgUrl} />
        </div>
        <div className='details'>
          <p>{name.split(' ')[0]} {name.split(' ')[1].charAt(0)}.</p>
          <p>{job}</p>

          <a href={twitter} target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={twitter} target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    )
  }
}

export default Person
