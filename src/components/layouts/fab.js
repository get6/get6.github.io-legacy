import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useScrollTrigger, makeStyles, Zoom } from "@material-ui/core"
import { HiArrowCircleUp } from "react-icons/hi"

const useStyles = makeStyles(theme => ({
  icon: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    cursor: "pointer",
  },
}))

const FloatingActionButton = () => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <HiArrowCircleUp
        title="scroll back to top"
        className={classes.icon}
        size={50}
        onClick={() => {
          scrollTo("body")
        }}
      />
    </Zoom>
  )
}

export default FloatingActionButton
