import React, { useState, useEffect } from "react"
import Header from "./layouts/header"
import FAB from "./layouts/fab"
import Footer from "./layouts/footer"
import { Container } from "reactstrap"

const Layout = ({ location, title, children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    let currentDark = dark
    if (lsDark !== undefined) {
      setDark(lsDark)
      currentDark = lsDark
    } else if (
      window.matchMedia("(prefers-color-scheme: dark)").matches === true
    ) {
      // Getting dark mode information from OS!
      // You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
      setDark(true)
      currentDark = true
    }
    checkMode(currentDark)
  }, [dark])

  // 다크모드 이벤트
  const onChangeDarkMode = () => {
    setDark(!dark)
    let currentDark = !dark
    localStorage.setItem("dark", JSON.stringify(currentDark))
    checkMode(currentDark)
  }

  // dark class 변경 이벤트
  const checkMode = dark => {
    // Helmet에서 제어가 가능할까?
    let className = dark ? "dark" : "light"
    if (dark) {
      document.body.classList.remove("light")
    } else {
      document.body.classList.remove("dark")
    }
    document.body.classList.add(className)
  }

  return (
    <Container>
      <Header
        location={location}
        title={title}
        dark={dark}
        onChangeDarkMode={onChangeDarkMode}
      />
      <main>{children}</main>
      <FAB />
      <Footer />
    </Container>
  )
}

export default Layout
