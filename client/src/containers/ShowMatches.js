import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showMatches } from '../actions/page'
import { ranDogData } from './ranDogPage'
// import { currentUser } from '../'

class ShowMatch extends Component {

componentDidMount() {
  console.log('hi');
  this.props.showMatches()

}

findTheOne() {

  // console.log(this.props.dogObject, 'hello')
  if (this.props.dogObject === undefined) {
    return
  }

  const othersbreeds = this.props.dogObject.filter(like => like.userid == 2)
  console.log(othersbreeds.length)
  this.num = othersbreeds.length
  return
}

// <<<<<<< css-done
// findTheOne() {
//   console.log(this.props.dogObject, 'hello')
//   if (this.props.dogObject === undefined) {
//     return
//   }

//   const ourbreeds = this.props.dogObject.filter(like => like.userid != 2)
//   console.log(ourbreeds)
// }

//   render() {
//     this.findTheOne()
//       return(
//         <ul>
//         <li className="Doggo">Your hooman:  </li>
//         </ul>
// =======
//   render() {
//     this.findTheOne()
//       return(

//         <p className="Doggo">Your likes: {this.num} </p>

// >>>>>>> master
      )
    }
}

const mapStateToProps = ({ match }) => ({ dogObject: match.dogObject })

export default connect(mapStateToProps, { showMatches,  })(ShowMatch)
