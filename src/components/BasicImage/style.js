import { styleOverride } from '../utils/style'

export const image = [
  {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  styleOverride()
]

export const imageFallback = [
  {
    width: '100%',
    paddingTop: '100%'
  },
  ({ theme: { color } }) => ({
    backgroundColor: color.shades.light
  }),
  styleOverride()
]



export default {
  image,
  imageFallback
}
