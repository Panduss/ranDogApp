import React, { Component } from 'react'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'

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
          <DislikeButton/>
        </div>
      )
    }
}

//export default connect(null, {newGame})(NewGameButton)
