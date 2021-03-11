import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(_ => ({
  root: {
    left: 0,
    bottom: 0,
    marginBottom: 0,
    position: "absolute",
    zIndex: -1,
    backgroundImage: `url("../../../content/assets/footer-background.png")`,
  },
}))

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <footer>
      <Box width={1} component="img" className={classes.root} />
    </footer>
  )
}

export default Footer
