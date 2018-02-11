export const button = [
  {
    cursor: 'pointer',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 16
  },
  ({ theme: { color, font } }) => ({
    color: color.text.inverted,
    backgroundColor: color.primary,
    fontFamily: font.family.primary
  })
]

export default {
  button
}
