import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchDogs, doglikes } from '../actions/page'
import './LikeButton.css'

export class LikeButton extends PureComponent {

  handleClick = () => {
    this.props.fetchDogs();
    this.props.doglikes();
  }

  render() {
    return (
      <div className="buttonlike">
      <img src={require('../images/Dog Paw Heart Clipart 09.jpg')} onClick={this.handleClick} className="LikeButton"/>
      </div>
    )
  }
}


export default connect(null, { fetchDogs, doglikes })(LikeButton)
