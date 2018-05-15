import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDogs } from '../actions/page'
import LikeButton from ‘../components/LikeButton’
import DislikeButton from ‘../components/DislikeButton’

class RanDogData extends Component {

componentDidMount() {
  this.props.fetchDogs()
}
  render() {
      return(
        <div>
        <p className="Doggo">Your doggo: {fetchDogs(this.props.ranDog)} </p>
        {console.log(this.props.ranDog)}
        <div>
        <LikeButton/>
         <DislikeButton/>
        </div>
        </div>
      )
    }
}

const mapStateToProps = ({ ranDog }) => ({ ranDog })

// export default connect(null, {fetchDogs})(RanDogData)
export default connect(mapStateToProps, { fetchDogs })(RanDogData)
