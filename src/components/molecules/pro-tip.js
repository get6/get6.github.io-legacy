import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import LightBulbIcon from "../atoms/light-bulb-icon"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
}))

export default function ProTip({ children }) {
  const classes = useStyles()
  return (
    <Typography className={classes.root} color="textSecondary">
      <LightBulbIcon />
      {children}
    </Typography>
  )
}
