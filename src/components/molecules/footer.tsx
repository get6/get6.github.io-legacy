import React from "react"
import { makeStyles } from "@material-ui/core"
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

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <footer>
      {/* <img src={FooterBackground} className={classes.root} /> */}
    </footer>
  )
}

export default Footer
