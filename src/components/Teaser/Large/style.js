export const container = [
  ({ theme: { color } }) => ({
    backgroundColor: color.background.inverted
  })
]

export const infoContainer = [
  {
    position: 'relative',
    marginTop: -50,
    paddingLeft: 20,
    paddingRight: 20
  },
  ({ theme: { color } }) => ({
    ':after': {
      content: '""',
      backgroundColor: color.background.inverted,
      position: 'absolute',
      top: 0,
      height: 50,
      left: 0,
      right: 0,
      opacity: 0.2,
      zIndex: 1
    }
  })
]

export const title = [
  {
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 25,
    fontWeight: 'bold',
    zIndex: 2
  },
  ({ theme: { color, font } }) => ({
    color: color.text.inverted,
    fontFamily: font.family.primary,
    ':before': {
      content: '""',
      backgroundColor: color.background.primary,
      width: 80,
      height: 10,
      position: 'absolute',
      top: -10,
      left: 0
    }
  })
]

export const description = [
  {
    paddingBottom: 12,
    fontSize: 16
  },
  ({ theme: { color, font } }) => ({
    color: color.shades.light,
    fontFamily: font.family.secondary
  })
]

export const authors = [
  {
    marginTop: 0,
    marginBottom: 12
  }
]

export default {
  container,
  infoContainer,
  title,
  description,
  authors
}
