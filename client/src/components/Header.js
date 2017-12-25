import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'

class Header extends Component {
  state = {
    burger: false
  }

  clickHandler = (e) => {
    this.setState(state => ({ burger: !state.burger}))
  }

  onLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query }]
    })
  }

  renderButtons() {
    const { loading, user } = this.props.data

    if (loading) {
      return <div />
    }

    if (user) {
      return (
        <a className="navbar-item" onClick={this.onLogout}>Logout</a>
      )
    } else {
      return (
        <Link to="/signin" className="navbar-item">Sign In</Link>
      )
    }
  }

  render() {
    const { burger } = this.state
    return (
      <nav className="navbar is-transparent">
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
            {this.renderButtons()}
          </div>
        </div>
      </nav>
    )
  }
}

const WithGraphHeader = compose(graphql(mutation), graphql(query))(Header)

export default WrappedComonent => {
  function WithHeader(props) {
    return (
      <div>
        <WithGraphHeader {...props} />
        <WrappedComonent {...props} />
      </div>
    )
  }
  return WithHeader
}
