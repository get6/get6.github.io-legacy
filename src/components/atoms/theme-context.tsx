import React, { createContext, useState, useEffect } from "react"
import { getInLocal, setInLocal } from "../../utils/common"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = createContext(defaultState)

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false)
  const storageKey = "dark"

  const toggleDark = () => {
    let lsDark = !dark
    setInLocal(storageKey, lsDark)
    setDark(lsDark)
  }

  useEffect(() => {
    const lsDark = getInLocal(storageKey)
    if (lsDark) {
      setDark(lsDark)
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
export default ThemeContext
