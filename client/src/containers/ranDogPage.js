import React, { Component } from 'react'
import LikeButton from '../components/likeButton'
// import { connect } from 'react-redux'
// import { FETCH_DOGS } from '../actions/page '

export default class RanDogData extends Component {



fetchMeADoggo(url) {
  return
}

  render() {
      return(
        <div>
          <p className="ShowGame">Your doggo: {this.fetchMeADoggo()}</p>
          <LikeButton/>
        </div>
      )
    }
}

//export default connect(null, {newGame})(NewGameButton)
