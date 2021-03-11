// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// custom CSS styles
import "./src/styles/global.css"
// Highlighting for code blocks
import "prismjs/themes/prism-coy.css"

import React from "react"

import { ThemeProvider } from "./src/components/atoms/theme-context"
import Snow from "./src/components/atoms/snow"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
    {[0, 1, 2, 11].indexOf(new Date().getMonth()) !== -1 && <Snow />}
  </ThemeProvider>
)
