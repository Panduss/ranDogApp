// import React, { Component } from 'react'
// import { connect } from 'react-redux'
//
// import { ranDogData } from './ranDogPage'
// import currentUser from '../reducers/currentUser'
// // import { currentUser } from '../'
//
// class ShowMatch extends Component {
//
// componentDidMount() {
//   console.log('hi');
//   this.props.showMatches(currentUser)
//
// }
//
// findTheOne() {
//
//   // console.log(this.props.dogObject, 'hello')
//   if (this.props.dogObject === undefined) {
//     return
//   }
//
//   const othersbreeds = this.props.dogObject.filter(like => like.userid == currentUser)
//   console.log(othersbreeds.length)
//   this.num = othersbreeds.length
//   return
// }
//
//   render() {
//     this.findTheOne()
//       return(
//
//         <p className="Doggo">Your likes: {this.num} </p>
//
//       )
//     }
// }
//
// const mapStateToProps = ({ match, currentUser }) => ({ dogObject: match.dogObject, currentUser })
//
// export default connect(mapStateToProps, { showMatches })(ShowMatch)
