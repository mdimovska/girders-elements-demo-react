import { styleOverride } from '../../../utils/style'

export const text = [
  {
    fontSize: 14,
    marginTop: 10
  },
  ({ theme: { color, font } }) => ({
    color: color.shades.light,
    fontFamily: font.family.secondary
  }),
  ({ highlight, theme: { color } }) => highlight ? { color: color.secondary } : {},
  styleOverride()
]

export default {
  text
}
