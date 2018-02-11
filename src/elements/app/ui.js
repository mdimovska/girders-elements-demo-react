import React from 'react'
import { ui } from '@girders-elements/core'
import { MainContainer } from '../../components'

ui.register([ 'app' ], ({ uiFor }) => (
  <MainContainer>{uiFor('content')}</MainContainer>
))
