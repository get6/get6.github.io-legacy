const ThemeProvider = require("./src/components/atoms/theme-context")

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
