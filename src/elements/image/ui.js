import React from 'react'
import { ui } from '@girders-elements/core'
import { Image } from '../../components'

ui.register([ 'image' ], ({ element }) => (
  <Image
    src={element.get('src')}
    alt={element.get('alt')}
    credit={element.get('credit')}
  />
))
