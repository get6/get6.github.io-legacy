import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Fab, useScrollTrigger, makeStyles, Zoom } from "@material-ui/core"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

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
      <Fab
        size="small"
        aria-label="scroll back to top"
        className={classes.icon}
        onClick={() => {
          scrollTo("body")
        }}
      >
        <ArrowUpwardIcon fontSize="small" />
      </Fab>
    </Zoom>
  )
}

export default FloatingActionButton
