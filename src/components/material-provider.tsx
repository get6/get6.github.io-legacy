import React, { useContext, useMemo } from "react"
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core"
import ThemeContext from "./atoms/theme-context"

const MaterialProvider: React.FC = ({ children }) => {
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

export default MaterialProvider
