import React from 'react'
import glamorous from 'glamorous'

import Image from '../../Image'
import PostMetadataEntry from '../../PostHeader/Metadata/Entry'

import style from './style'

const Container = glamorous.div(style.container)
const InfoContainer = glamorous.div(style.infoContainer)
const Title = glamorous.div(style.title)
const Description = glamorous.div(style.description)

const TeaserLarge = ({ title = '', description, image, authors }) => (
  <Container>
    <Image {...image} />
    <InfoContainer>
      <Title>{title.toUpperCase()}</Title>
      <PostMetadataEntry text={authors} highlight styleOverride={style.authors} />
      <Description>{description}</Description>
    </InfoContainer>
  </Container>
)

export default TeaserLarge
