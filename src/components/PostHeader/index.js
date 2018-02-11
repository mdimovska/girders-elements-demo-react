import React from 'react'
import glamorous from 'glamorous'

import style from './style'

const Header = glamorous.div(style.header)

import Title from './Title'
import Metadata from './Metadata'

const PostHeader = ({ children}) => (
  <Header>
    {children}
  </Header>
)


PostHeader.Title = Title
PostHeader.Metadata = Metadata

export default PostHeader
