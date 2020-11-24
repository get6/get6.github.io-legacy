import React, { useState } from "react"
import {
  Container,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core"
import Header from "./layouts/header"
import FAB from "./layouts/fab"
import Footer from "./layouts/footer"

const Layout = ({ location, title, children }) => {
  const getDarkMode = () => {
    // 스위치를 만진 적이 있다면
    const storageDarkMode = localStorage.getItem("dark")
    const hasPersistedPreference = typeof storageDarkMode === "string"

    if (hasPersistedPreference) return storageDarkMode === "true"

    // 기본 다크모드 설정
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof prefersDarkMode === "boolean"

    if (hasMediaQueryPreference) {
      return mql.matches ? true : false
    }

    return false
  }

  // 다크모드
  const [dark, setDark] = useState(getDarkMode())
  // 다크모드 설정
  const darkToggle = () => {
    setDark(!dark)
    localStorage.setItem("dark", !dark)
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: dark ? "dark" : "light",
        },
      }),
    [dark]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          location={location}
          title={title}
          dark={dark}
          darkToggle={darkToggle}
        />
        <main>{children}</main>
      </Container>
      <FAB />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
