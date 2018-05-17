import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs, likedDog } from '../actions/page'
import addLike from '../actions/addLike'

export class LikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
    this.props.likedDog();
    this.props.addLike();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="LikeButton">Like</button>
    )
  }
}

const mapDispatchToProps = { fetchDogs, likedDog, addLike }
export default connect(null, mapDispatchToProps)(LikeButton)

// The button renders
// Yarn installed superagent
// Added the dogs to the json file
