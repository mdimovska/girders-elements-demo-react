import React from 'react'
import { ThemeProvider } from 'glamorous'

import config from '../../../config'

const MainContainer = ({ children }) =>  (
  <ThemeProvider theme={config.theme}>
    <div>{children}</div>
  </ThemeProvider>
)

export default MainContainer
