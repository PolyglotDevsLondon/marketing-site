import React, { Component } from 'react'

import Person from './person'

class People extends Component {
  render () {
    const { people } = this.props

    const renderPeople = people.length ? people.map(person => {
      return <Person person={person} />
    }) : null

    return (
      <div className='people'>
        {renderPeople}
      </div>
    )
  }
}

export default People
