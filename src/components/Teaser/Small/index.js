import React from 'react'
import glamorous from 'glamorous'

import Image from '../../Image'

import style from './style'

const Container = glamorous.div(style.container)
const ImageContainer = glamorous.div(style.imageContainer)
const Title = glamorous.div(style.title)

const TeaserSmall = ({ title, image }) => (
  <Container>
    <ImageContainer>
      <Image {...image} style={style.image} />
    </ImageContainer>
    <Title>{title}</Title>
  </Container>
)

export default TeaserSmall
