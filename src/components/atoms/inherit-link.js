import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

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

const InheritLink = props => {
  const classes = useStyles()
  let state = {
    ...props,
  }
  state.className = state.className + ` ${classes.hover}`
  return <Link {...state} />
}

InheritLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default InheritLink