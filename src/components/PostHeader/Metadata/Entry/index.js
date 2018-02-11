import React from 'react'
import glamorous from 'glamorous'

import style from './style'

const MetadataEntryText = glamorous.div(style.text)

const MetadataEntry = ({ text, highlight, style }) => (
  <MetadataEntryText highlight={highlight} style={style}>{text}</MetadataEntryText>
)

export default MetadataEntry
