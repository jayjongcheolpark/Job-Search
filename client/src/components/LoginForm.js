import React, { Component } from 'react'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'
import { graphql, compose } from 'react-apollo'
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
    console.log(email, password)
    this.props
      .mutate({
        variables: { email, password }
      })
      .then(res => this.setState({ redirect: true }))
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
          <button className="btn btn-primary btn-lg btn-block">Sign In</button>
        </div>
      </form>
    )
  }
}

const componentWithData = compose(graphql(query), graphql(mutation))(LoginForm)

export default componentWithData
