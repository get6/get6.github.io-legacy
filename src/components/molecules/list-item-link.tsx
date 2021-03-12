import { ListItem } from "@material-ui/core"
import React from "react"
import InheritLink from "../atoms/inherit-link"

interface ChildProps {
  href: string
  className: string
}

const ListItemLink: React.FC<ChildProps> = props => {
  return (
    <InheritLink to={props.href}>
      <ListItem button {...props}></ListItem>
    </InheritLink>
  )
}

export default ListItemLink
