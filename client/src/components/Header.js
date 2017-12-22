import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const HeaderWithStyles = withStyles(styles)(
  class Header extends Component {
    render() {
      const { classes } = this.props
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button color="contrast" component={Link} to="/">
                <HomeIcon />
              </Button>
              <Typography type="title" color="inherit" className={classes.flex}>
                {this.props.title}
              </Typography>
              <Button color="contrast" component={Link} to="/login">
                Sign In
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }
)

export default WrappedComonent => {
  function WithHeader(props) {
    return (
      <div>
        <HeaderWithStyles {...props} />
        <WrappedComonent {...props} />
      </div>
    )
  }
  return WithHeader
}
