import React from 'react'
import glamorous from 'glamorous'

import style from './style'

const Content = glamorous.div(style.content)

const PostContent = ({ text }) => (
  <Content>{text}</Content>
)

export default PostContent
