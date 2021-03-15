import { ListItem, makeStyles } from "@material-ui/core"
import React from "react"
import InheritLink from "../atoms/inherit-link"

interface ChildProps {
  href: string
  border: boolean
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    border: "1px solid",
    margin: theme.spacing(1),
  },
}))

const ListItemLink: React.FC<ChildProps> = props => {
  const classes = useStyles()
  return (
    <InheritLink to={props.href}>
      <ListItem button {...props} className={classes.root}></ListItem>
    </InheritLink>
  )
}

export default ListItemLink
