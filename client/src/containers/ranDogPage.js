import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import addLike from '../actions/addLike'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
}
  render() {
      return(
        <div>
        <h1>Randog</h1>
        <p className="Doggo">Your doggo: {this.props.ranDog.name} </p>
        <img src= {this.props.ranDog.pic}></img>
        <div>
        <LikeButton/>
         <DislikeButton/>
        </div>
        </div>
      )
    }
}

const mapStateToProps = ({ ranDog }) => ({ ranDog })
const mapDispatchToProps = { fetchDogs, addLike }

export default connect(mapStateToProps, mapDispatchToProps )(RanDogData)
