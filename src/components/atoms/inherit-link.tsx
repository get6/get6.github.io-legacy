import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

interface DataProps {
  className?: string
  to: string
}

const useStyles = makeStyles(() => ({
  hover: {
    color: "inherit",
    textDecoration: "none",
    whiteSpace: "nowrap",
    overflow: "auto",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

const InheritLink: React.FC<DataProps> = props => {
  const classes = useStyles()
  let state = {
    ...props,
  }
  state.className = state.className + ` ${classes.hover}`
  return <Link {...state} />
}

export default InheritLink
