import React, { useContext, useMemo } from "react"
import PropTypes from "prop-types"
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core"
import ThemeContext from "../components/atoms/theme-context"

const MaterialProvider = ({ children }) => {
  const { dark } = useContext(ThemeContext)

  const materialTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: dark ? "dark" : "light",
        },
      }),
    [dark]
  )

  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

MaterialProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MaterialProvider
