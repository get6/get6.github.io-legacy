import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "./layouts/header"
import FAB from "./layouts/fab"
import Footer from "./layouts/footer"
import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            categories {
              name
              link
              children {
                name
                link
              }
            }
          }
        }
      }
    `
  )

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

  const categories = data.site.siteMetadata.categories

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          location={location}
          title={title}
          dark={dark}
          darkToggle={darkToggle}
          categories={categories}
        />
        <main>{children}</main>
        <FAB />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
