import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import TopTen from '../components/toTopTen'

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
}
  render() {
      return(
        <div>
        <p className="Doggo">Your doggo: {this.props.ranDog.name} </p>
        <img src= {this.props.ranDog.pic}></img>
        <div>
        <LikeButton/>
         <DislikeButton/>
        </div>
        <TopTen />
        </div>
      )
    }
}


const mapStateToProps = ({ ranDog }) => ({ ranDog })

export default connect(mapStateToProps, { fetchDogs })(RanDogData)
