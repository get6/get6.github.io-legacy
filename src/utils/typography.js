import Typography from "typography"
import GithubTheme from "typography-theme-github"

const typography = new Typography(GithubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm } = typography
export default typography
