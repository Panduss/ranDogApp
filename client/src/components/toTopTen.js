import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showMatches } from '../actions/page'


export class TopTen extends PureComponent {

  handleClick = () => {
    this.props.showMatches();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="toTopTen">Show me my top 10!</button>
    )
  }
}


export default connect(null, { showMatches })(TopTen)
