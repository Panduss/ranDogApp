import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'

export class LikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs()
  }

  render() {
    return (
      <button onClick={this.handleClick} className="LikeButton">Like</button>
    )
  }
}

export default connect(null, { fetchDogs })(LikeButton)

// The button renders
// Yarn installed superagent
// Added the dogs to the json file
