import React from 'react'
import ReactDOM from 'react-dom'
import './polyfills'

import { Engine } from '@skele/classic'
import './src/elements' // register all elements in Skele

import initialState from './config/init'
import config from './config'

config.init([`web-${process.env.NODE_ENV}`, 'web', process.env.NODE_ENV])

ReactDOM.render(
  <Engine
    config={config}
    initState={initialState}
  />,
  document.getElementById('root')
)
