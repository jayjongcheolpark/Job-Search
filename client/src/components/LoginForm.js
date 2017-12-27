import React, { Component } from 'react'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'
import { graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    redirect: false
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    console.log(this.props)
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
            <div className="control has-text-centered">
              <button
                className="button is-medium is-link has-text-weight-bold"
                style={{ width: '100%' }}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default graphql(query)(graphql(mutation)(LoginForm))
