import React, { Component } from 'react'
import { Link } from 'react-router-dom'

  class Header extends Component {
    render() {
      return (
          <nav className="navbar navbar-dark bg-primary justify-content-between">
            <Link className="navbar-brand" to="/">JobHub</Link>
            <Link className="btn btn-primary" to="/signin">Sign In</Link>
          </nav>
      )
    }
  }

export default WrappedComonent => {
  function WithHeader(props) {
    return (
      <div>
        <Header {...props} />
        <WrappedComonent {...props} />
      </div>
    )
  }
  return WithHeader
}
