import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/page';


class LoginPage extends Component {
  constructor(props) {
    // passing props to be the base constructor
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // initial state
    this.state = {term: ''};
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.username })
    this.setState({ term: event.target.password })
  }

// prevent browser to refresh the page
// updates state in redux
  onFormSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.username);
    this.props.login(this.state.password);
    this.setState({term: ''});

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Username"
        className="form-control"
        value={this.state.username}
        onChange={this.onInputChange} />
        <input
          placeholder="Password"
          className="form-control"
          value={this.state.password}
          onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Go!</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage)
