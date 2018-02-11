import React from 'react'
import glamorous from 'glamorous'

import Image from '../../Image'
import PostMetadataEntry from '../../PostHeader/Metadata/Entry'

import style from './style'

const Container = glamorous.div(style.container)
const ImageContainer = glamorous.div(style.imageContainer)
const Title = glamorous.div(style.title)

const TeaserMedium = ({ title, image, authors }) => (
  <Container>
    <ImageContainer>
      <Image {...image} style={style.image} />
    </ImageContainer>
    <Title>{title}</Title>
    <PostMetadataEntry text={authors} highlight style={style.authors} />
  </Container>
)

export default TeaserMedium
