import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import Routes from './routes.js'

const store = configureStore()
window.React = React
window.store = store
export default class Root extends Component {
  componentDidMount () {
  }
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
