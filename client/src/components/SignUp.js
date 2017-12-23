import React, { Component } from 'react'
import SignupForm from './SignupForm'

class SignUp extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xs-8 col-sm-8 col-md-6 jumbotron mt-5">
          <h1 className="text-center">Join JobHub</h1>
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default SignUp
