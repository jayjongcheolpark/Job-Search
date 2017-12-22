import React, { Component } from 'react'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'
import { graphql, compose } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'


const styles = theme => ({
  container: {
    display: 'flex',
    margin: '20px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  input: {
    display: 'none'
  }
})

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    redirect: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    console.log(email, password)
    this.props
      .mutate({
        variables: { email, password },
      })
      .then(res => this.setState({ redirect: true }))
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        console.log(errors)
        this.setState({ errors });
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    if (this.state.redirect) {
      return <Redirect to="/mylist" />
    }

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <Grid container justify="center" direction="column">
          <Grid item>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              required
            />
          </Grid>
          <Grid item>
            {this.state.errors.map(error => <div key={error}>{error}</div>)}
          </Grid>
          <Button type="submit" raised color="primary" className={classes.button}>
            Sign In
          </Button>
        </Grid>
      </form>
    )
  }
}

const componentWithData = compose(
  graphql(query),
  graphql(mutation),
)(LoginForm)

export default withStyles(styles)(componentWithData)