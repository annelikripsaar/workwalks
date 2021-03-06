import Typography from "typography"
// import fontFiles from "../../static/fonts/fonts"

const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: ["Niina", "sans-serif"],
  bodyFontFamily: ["Niina", "serif"],
})

export const { scale, rhythm, options } = typography
export default typography
