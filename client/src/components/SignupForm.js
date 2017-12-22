import React, { Component } from 'react'
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
    const { classes } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
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
              margin="normal"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              required
            />
          </Grid>
          <Button raised color="accent" className={classes.button}>
            Sign Up
          </Button>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(SignupForm)
