import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import LoginForm from '../components/LoginForm'
import { Redirect } from 'react-router-dom'

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password)

  }

  render() {

    if (this.props.currentUser) return <Redirect to="/" />
    console.log("hey we're getting something")
    return (
      <div>
        <h1>Login</h1>
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