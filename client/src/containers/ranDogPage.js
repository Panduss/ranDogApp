import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import './ranDogPage.css';

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
}
  render() {
      return(
        <div>
          <div id="banner" className="banner">
            <h1 className="title">RANDOG</h1>
          </div>
          <div className="flex-container">
            <div className="box">
              <p className="Doggo">{this.props.ranDog.name} </p>
              <img src= {this.props.ranDog.pic}></img>
            </div>
            <div className="buttons">
              <LikeButton className="butt"/>
              <DislikeButton className="butt"/>
            </div>
          </div>
        </div>
        )
    }
}


const mapStateToProps = ({ ranDog }) => ({ ranDog })

export default connect(mapStateToProps, { fetchDogs })(RanDogData)
