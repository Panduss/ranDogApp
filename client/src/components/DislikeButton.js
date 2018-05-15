import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'

export class DislikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="DislikeButton">Dislike</button>
    )
  }
}

export default connect(null, { fetchDogs })(DislikeButton)
