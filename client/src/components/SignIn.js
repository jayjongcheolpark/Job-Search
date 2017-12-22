import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import LoginForm from './LoginForm'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class SignIn extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={11} sm={8} md={6} lg={5}>
          <Paper className={classes.paper}>
            <h1>Sign in to JobHub</h1>
            <LoginForm />
            <hr />
            <p>
              New to JobHub ?
              <Link style={{ marginLeft: "10px" }} to="/signup">
                Create an account
              </Link>.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(SignIn)
