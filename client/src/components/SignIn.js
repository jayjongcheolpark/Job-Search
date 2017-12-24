import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

class SignIn extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-3-mobile is-size-2-tablet has-text-grey-darker has-text-centered">Sign in to JobHub</h1>
            <LoginForm />
            <hr />
            <div className="subtitle has-text-grey has-text-centered">
            New to JobHub ? <Link to="signup">Create an account</Link>.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
