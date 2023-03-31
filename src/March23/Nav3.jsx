import React, { Component } from 'react'

 class Nav3 extends Component {
  render() {
    return (
      <div>
            <h1>{this.props.Username}</h1>
            <h1>{this.props.Password}</h1>
      </div>
    )
  }
}
export default Nav3
