import React, { Component } from 'react'
import glamorous from 'glamorous'

import style from './style'

const Image = glamorous.img(style.image)
const ImageFallback = glamorous.div(style.imageFallback)

class BasicImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.src !== nextProps.src) {
      // new image url detected, should reset the state
      this.setState({
        hasError: false
      })
    }
  }

  _onError = () => {
    this.setState({
      hasError: true
    })
  }

  render () {
    const { src, alt, fallbackStyle, style } = this.props
    const { hasError } = this.state

    if (!src || hasError) {
      return (
        <ImageFallback styleOverride={fallbackStyle} />
      )
    }

    return (
      <Image
        src={src}
        alt={alt}
        onError={this._onError}
        styleOverride={style}
      />
    )
  }
}

BasicImage.defaultProps = {
  style: '',
  fallbackStyle: ''
}

export default BasicImage
