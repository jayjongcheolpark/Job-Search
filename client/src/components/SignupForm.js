import React, { Component } from 'react'

class SignupForm extends Component {
  state = {
    email: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <form className="mt-5">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="example@jobhub.live"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success btn-lg btn-block">Sign In</button>
        </div>
      </form>
    )
  }
}

export default SignupForm
