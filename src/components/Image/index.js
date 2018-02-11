import React, { Fragment } from 'react'
import glamorous from 'glamorous'

import BasicImage from '../BasicImage'
import style from './style'

const Credit = glamorous.div(style.credit)

const Image = ({ src, alt, credit, ...props }) =>(
  <Fragment>
    <BasicImage src={src} alt={alt} {...props} />
    {credit && <Credit>{`Photo: ${credit}`}</Credit>}
  </Fragment>
)

export default Image
