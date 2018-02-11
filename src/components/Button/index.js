import React from 'react'
import glamorous from 'glamorous'

import style from './style'

const Button = glamorous.div(style.button)

const ButtonComponent = ({ text = 'Load new content', onClick }) => (
  <Button onClick={onClick}>{text}</Button>
)

export default ButtonComponent
