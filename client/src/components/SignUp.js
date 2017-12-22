import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import SignupForm from './SignupForm'

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

class SignUp extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={9} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
            <h1>Join JobHub</h1>
            <SignupForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(SignUp)

