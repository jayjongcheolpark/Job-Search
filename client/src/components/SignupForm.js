import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Signup'

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    redirect: false,
    errors: []
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  onSubmit= e => {
    e.preventDefault()
    const { email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      const errors = []
      errors.push("Password is different from confirm password")
      this.setState({ errors })
    }
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .then(res => {
        this.setState({ redirect: true })
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message)
        console.log(errors)
        this.setState({ errors })
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/mylist" />
    }
    return (
      <div className="columns is-mobile is-centered">
        <form
          className="column is-four-fifths-mobile is-half-tablet"
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
              <span className="icon is-small is-left">
                <i className="fa fa-lock" />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                type="password"
                className="input is-medium"
                placeholder="confirm password"
                value={this.state.confirmPassword}
                onChange={this.handleChange('confirmPassword')}
                required
              />
              <span className="icon is-small is-left">
                <i className="fa fa-lock" />
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

export default graphql(mutation)(graphql(query)(SignupForm))
