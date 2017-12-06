import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  HashRouter,
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter} from 'react-router-dom'
import ReportOutage from './components/ReportOutage'
import {Pstr} from './components/Pstr'
import {Pltr} from './components/Pltr'
import OutageCenter from './components/OutageCenter'
import Status from './components/Status'
import { NoPage404 } from './components/NoPage404.js'

class Routes extends Component {

  render () {
    const {app} = this.props
    console.log('router setting app' , app)
    return (
      <BrowserRouter>
      <div>
      <Switch>
            <Route   exact path='/' component={OutageCenter}/>
            <Route    path='/outage' component ={ReportOutage}/>
            <Route    path='/pltr' component={Pltr} />
            <Route    path='/pstr' component={Pstr} />
>           <Route    path='/status' component={Status} />
            <Route component={NoPage404}/>
      </Switch>    
      </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  const localState = state
  console.log('state to map ',localState)
  return {
    app: localState
  }
}

export default connect(mapStateToProps)(Routes)
