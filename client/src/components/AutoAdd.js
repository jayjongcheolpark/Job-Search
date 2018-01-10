import React, { Component } from 'react'

class AutoAdd extends Component {

  state = {
    site: ""
  }

  handleChange = e => {
    this.setState({
      site: e.target.value
    })
  }

  render() {
    return (
      <div class="columns is-mobile is-centered">
        <form
          className="column is-four-fifths-mobile is-three-fifths-tablet is-half-desktop"
        >
          <div className="field is-grouped">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input is-info"
                  placeholder="https://jobhub.live/..."
                  value={this.state.site}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info">Add Job</button>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default AutoAdd

