import React from "react"
import {
  Box,
  Hidden,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import InheritLink from "./layouts/inherit-link"

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    border: "1px solid",
    margin: theme.spacing(1),
  },
  text: {
    overflowX: "auto",
  },
}))

const ListItemLink = props => {
  return (
    <InheritLink to={props.href}>
      <ListItem button {...props}></ListItem>
    </InheritLink>
  )
}

const PostList = ({ items, border }) => {
  const classes = useStyles()
  return (
    <List component="nav" aria-label="tag list">
      {items.map(({ node }, i) => {
        const { slug } = node.fields
        const { title, date } = node.frontmatter
        return (
          <React.Fragment key={i}>
            <ListItemLink href={slug} className={border && classes.root}>
              <ListItemText primary={title} className={classes.text} />
              <Hidden xsDown>
                <ListItemSecondaryAction>
                  <Box component="span">{date}</Box>
                </ListItemSecondaryAction>
              </Hidden>
            </ListItemLink>
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default PostList
