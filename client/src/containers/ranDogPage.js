import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import TopTen from '../components/toTopTen'
import './ranDogPage.css';

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
}
  render() {
      return(
        <div className="flex-container">
          <div className="box">
            <p className="Doggo">Your doggo: {this.props.ranDog.name} </p>
              <img src= {this.props.ranDog.pic}></img>
        </div>
        <div>
        <LikeButton/>
         <DislikeButton/>
        <TopTen />
        </div>
        </div>
      )
    }
}


const mapStateToProps = ({ ranDog }) => ({ ranDog })

export default connect(mapStateToProps, { fetchDogs })(RanDogData)
