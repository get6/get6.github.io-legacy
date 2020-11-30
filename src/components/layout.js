import React, { useEffect, useState, useMemo } from "react"
import {
  Container,
  CssBaseline,
  createMuiTheme,
  useMediaQuery,
  ThemeProvider,
} from "@material-ui/core"
import Header from "./layouts/header"
import FAB from "./layouts/fab"
import Footer from "./layouts/footer"
import MaterialProvider, { dark, darkToggle } from "./material-provider"

const Layout = ({ location, title, children }) => {
  // 다크모드 기본은 밝은화면
  // const [dark, setDark] = useState(false)
  // 기본 다크모드 설정값
  // const mql = useMediaQuery("(prefers-color-scheme: dark)")
  // 다크모드 참조값 조회
  // const getDarkMode = () => {
  //   // 저장된 스위치 값
  //   const storageDarkMode = localStorage.getItem("dark")
  //   const hasPersistedPreference = typeof storageDarkMode === "string"
  //   // 다크모드값
  //   if (hasPersistedPreference) return storageDarkMode === "true"

  //   const hasMediaQueryPreference = typeof prefersDarkMode === "boolean"
  //   // 기본 다크모드값
  //   if (hasMediaQueryPreference) {
  //     return mql.matches ? true : false
  //   }
  //   // 밝은화면
  //   return false
  // }

  // useEffect(() => {
  //   // setDark(getDarkMode())
  //   console.log(`useEffect ${dark}`)
  // }, [dark])

  // 다크모드 설정
  // const darkToggle = () => {
  //   setDark(!dark)
  //   localStorage.setItem("dark", !dark)
  //   console.log(`darkToggle ${dark}`)
  // }

  // const theme = useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: dark ? "dark" : "light",
  //       },
  //     }),
  //   [dark]
  // )

  // return (
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <Container maxWidth="lg">
  //       <Header
  //         location={location}
  //         title={title}
  //         dark={dark}
  //         darkToggle={darkToggle}
  //       />
  //       <main>{children}</main>
  //     </Container>
  //     <FAB />
  //     <Footer />
  //   </ThemeProvider>
  // )
  return (
    <MaterialProvider>
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
    </MaterialProvider>
  )
}

export default Layout
