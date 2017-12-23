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
      <div className="columns is-mobile is-centered">
        <form
          className="column is-two-thirds-mobile is-half-tablet"
          onSubmit={this.onSubmit}
        >
          <div className="field">
            <div className="control has-icons-left">
              <input
                type="email"
                className="input is-medium"
                placeholder="example@jobhub.live"
                value={this.state.email}
                onChange={this.handleChange('email')}
                required
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                type="password"
                className="input is-medium"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                required
              />
              <span class="icon is-small is-left">
                <i class="fa fa-lock" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                type="password"
                className="input is-medium"
                placeholder="confirm password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                required
              />
              <span class="icon is-small is-left">
                <i class="fa fa-lock" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-text-centered">
              <button
                className="button is-medium is-success has-text-weight-bold"
                style={{ width: '100%' }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm
