import React, { useEffect, useState, useMemo } from "react"
import {
  CssBaseline,
  createMuiTheme,
  useMediaQuery,
  ThemeProvider,
} from "@material-ui/core"
import { useSelector } from "react-redux"

const MaterialProvider = ({ children }) => {
  // 다크모드 기본은 밝은화면
  const dark = useSelector(state => state.value)
  // 기본 다크모드 설정값
  const mql = useMediaQuery("(prefers-color-scheme: dark)")
  const getDarkMode = () => {
    // 저장된 스위치 값
    const storageDarkMode = localStorage.getItem("dark")
    const hasPersistedPreference = typeof storageDarkMode === "string"
    // 다크모드값
    if (hasPersistedPreference) return storageDarkMode === "true"

    const hasMediaQueryPreference = typeof prefersDarkMode === "boolean"
    // 기본 다크모드값
    if (hasMediaQueryPreference) {
      return mql.matches ? true : false
    }
    // 밝은화면
    return false
  }

  const theme = useMemo(
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
      {children}
    </ThemeProvider>
  )
}

export const { dark, darkToggle } = MaterialProvider
export default MaterialProvider
