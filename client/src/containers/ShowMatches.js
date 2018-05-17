import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showMatches } from '../actions/page'

class ShowMatch extends Component {

componentDidMount() {
  this.props.showMatches()
}
  render() {
      return(
        <ul>
        <li className="Doggo">Your hooman: {this.showMatches()} </li>
        </ul>
      )
    }
}

const mapStateToProps = ({ match }) => ({ match })

export default connect(mapStateToProps, { showMatches })(ShowMatch)
