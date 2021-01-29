import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import FooterBackground from "../../../content/assets/footer-background.png"

const useStyles = makeStyles(_ => ({
  root: {
    left: 0,
    bottom: 0,
    marginBottom: 0,
    position: "absolute",
    zIndex: -1,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer>
      <Box
        width={1}
        component="img"
        className={classes.root}
        src={FooterBackground}
        alt="footer-image"
      />
    </footer>
  )
}

export default Footer
