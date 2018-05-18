import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'

export class DislikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
  }

  render() {
    return (
    <div className="buttondislike">
      <img src={require('../images/unlike dog.png')} onClick={this.handleClick} className="DislikeButton"/>
      </div>
    )
  }
}

export default connect(null, { fetchDogs })(DislikeButton)
