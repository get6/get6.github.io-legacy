// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// custom CSS styles
import "./src/styles/global.css"
// Highlighting for code blocks
import "prismjs/themes/prism-coy.css"
import wrapWithProvider from "./src/components/atoms/wrap-with-provider"

// export const { dark, darkToggle } = wrapRootElement
export const wrapRootElement = wrapWithProvider
