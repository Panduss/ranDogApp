import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs, showMatches } from '../actions/page'

export class LikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
    this.props.showMatches();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="LikeButton">Like</button>
    )
  }
}

const mapDispatchToProps = { fetchDogs, showMatches }
export default connect(null, mapDispatchToProps)(LikeButton)

// The button renders
// Yarn installed superagent
// Added the dogs to the json file
