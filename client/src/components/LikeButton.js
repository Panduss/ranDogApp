import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs, doglikes, showMatches } from '../actions/page'


export class LikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
    this.props.doglikes();
    this.props.showMatches();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="LikeButton">Like</button>
    )
  }
}


export default connect(null, { fetchDogs, doglikes, showMatches })(LikeButton)
