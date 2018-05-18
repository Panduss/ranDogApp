import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import { showMatches } from '../actions/page'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import TopTen from '../components/toTopTen'
import { ranDogData } from './ranDogPage'

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
  //this.props.showMatches(this.props.currentUser.userid)
}

  render() {
      console.log(this.props);
      return(
        <div>
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


const mapStateToProps = ({ ranDog, match, currentUser }) => ({ ranDog, dogObject: match.dogObject, likeCount: match.numberOfLikesCurrentUser, currentUser })

export default connect(mapStateToProps, { fetchDogs, showMatches })(RanDogData)

//p className="Doggo">Your likes: {this.props.likeCount}
