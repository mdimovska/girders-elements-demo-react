import React from 'react'
import { ui } from '@skele/classic'
import { MainContainer } from '../../components'

ui.register([ 'app' ], ({ uiFor }) => (
  <MainContainer>{uiFor('content')}</MainContainer>
))
