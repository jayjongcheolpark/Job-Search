import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    burger: false
  }

  clickHandler = (e) => {
    this.setState(state => ({ burger: !state.burger}))
  }

  render() {
    const { burger } = this.state
    return (
      <nav class="navbar is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/"><span className="has-text-weight-bold">JobHub</span></Link>
          <div onClick={this.clickHandler} className={burger ? "navbar-burger burger is-active" : "navbar-burger burger"} data-target="navbarTransparent">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarTransparent" className={burger? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-end">
            <Link to="/signin" className="navbar-item">Sign In</Link>
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
