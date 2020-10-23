import "../styles/global.css"

import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.overrideThemeStyles = () => ({
  a: {
    color: "var(--textLink)",
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
