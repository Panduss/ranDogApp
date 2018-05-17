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
    return (
      <div>
      <div class="banner">
          <h1>RANDOG</h1>
      </div>
      <div class="sub-title">
          <img src={require('../images/Dog Paw Heart Clipart 09.jpg')} />
          <h2></h2>
          </div>
          <LoginForm onSubmit={this.handleSubmit} />
          <p>{this.props.loginError}</p>
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
