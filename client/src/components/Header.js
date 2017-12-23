import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">JobHub</Link>
          </div>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/signin">Sign In</Link>
          </div>
        </div>
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
