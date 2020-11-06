import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "./layouts/header"
import FAB from "./layouts/fab"
import Footer from "./layouts/footer"
import { CssBaseline, useMediaQuery } from "@material-ui/core"
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

  // 기본 다크모드 설정
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  // 다크모드
  const [dark, setDark] = useState(false)
  // 다크모드 설정
  const darkToggle = () => {
    setDark(!dark)
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
