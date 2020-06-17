import Typography from "typography"
import "../../static/fonts/fonts.css"

const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: ["Tiina", "sans-serif"],
  bodyFontFamily: ["Tiina", "serif"],
})

export const { scale, rhythm, options } = typography
export default typography
