import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import LoginForm from '../components/LoginForm'
import { Redirect } from 'react-router-dom'
import './LoginPage.css';

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password)

  }

  render() {
    if (this.props.currentUser) return <Redirect to="/" />
    console.log("hey we're getting something")
    return (
      <div>
      <div id="banner" className="banner">
          <h1 className="title"><img src={require('../images/Dog Paw Heart Clipart 09.jpg')} />RANDOG
          <img src={require('../images/Dog Paw Heart Clipart 09.jpg')} /></h1>
          <h2>Connecting dog lovers in your area<img src={require('../images/map.png')} /></h2>
      </div>
      <div>

      </div>
      <div className="login">
        <LoginForm onSubmit={this.handleSubmit} />
        <p>{this.props.loginError}</p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    loginError: state.login.error
  }
}

export default connect(mapStateToProps, { login })(LoginPage)
