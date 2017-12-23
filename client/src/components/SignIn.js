import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

class SignIn extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xs-8 col-sm-8 col-md-6 jumbotron mt-5">
          <h1 className="text-center">Sign in to JobHub</h1>
          <LoginForm />
          <hr />
          New to JobHub ? <Link to="signup">Create an account</Link>.
        </div>
      </div>
    )
  }
}

export default SignIn
