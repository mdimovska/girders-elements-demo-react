export const container = [
  {
    padding: 20
  },
  ({ theme: { color } }) => ({
    backgroundColor: color.shades.extraDark
  })
]

export const imageContainer = [
  {
    position: 'relative',
    paddingTop: '50%',
    height: 0,
    overflow: 'hidden'
  }
]

export const image = [
  ({ theme: { color } }) => ({
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  })
]

export const title = [
  {
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 20,
    fontWeight: 'bold'
  },
  ({ theme: { color, font } }) => ({
    color: color.text.inverted,
    fontFamily: font.family.primary
  })
]

export const authors = [
  {
    marginTop: 0
  }
]

export default {
  container,
  imageContainer,
  image,
  title,
  authors
}
