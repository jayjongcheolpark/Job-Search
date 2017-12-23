import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import MyJobList from './components/MyJobList'
import WithHeader from './components/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => WithHeader(App)({ ...props, title: 'JobHub' })}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route
            exact
            path="/mylist"
            render={props =>
              WithHeader(MyJobList)({ ...props, title: 'My Job List' })
            }
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
