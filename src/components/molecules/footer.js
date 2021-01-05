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
  post: {
    background: `rgb(238,174,202)`,
    background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
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
