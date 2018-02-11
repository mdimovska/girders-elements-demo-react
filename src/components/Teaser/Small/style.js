export const container = [
  {
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  ({ theme: { color } }) => ({
    backgroundColor: color.background.primary
  })
]

export const imageContainer = [
  {
    position: 'relative',
    width: '50%',
    paddingTop: '25%',
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
    flex: 1,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  ({ theme: { color, font } }) => ({
    color: color.text.primary,
    fontFamily: font.family.primary
  })
]

export default {
  container,
  imageContainer,
  image,
  title
}
