import React from 'react'
import glamorous from 'glamorous'

import style from './style'

const Title = glamorous.p(style.title)

const PostTitle = ({ title = '' }) => (
  <Title>{title.toUpperCase()}</Title>
)

export default PostTitle
