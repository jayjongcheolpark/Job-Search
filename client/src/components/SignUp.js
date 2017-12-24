import React, { Component } from 'react'
import SignupForm from './SignupForm'

class SignUp extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-3-mobile is-size-2-tablet has-text-grey-darker has-text-centered">
              Join JobHub
            </h1>
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
