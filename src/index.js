import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Root from './Root.js'

render(
  <Root />,
  document.getElementById('react-container')
)
