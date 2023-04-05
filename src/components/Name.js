import React, { Component } from 'react'

export class Name extends Component {
  render() {
    const {title2} =this.props
    return (
      <div className='NameMain'>
        <h2>{title2}</h2>
      </div>
    )
  }
}

export default Name
