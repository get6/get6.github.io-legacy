import React from "react"
import {
  Box,
  Hidden,
  List,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import ListItemLink from "../molecules/list-item-link"
import { BlogPostTemplateQuery_allMarkdownRemark_edges } from "../../templates/__generated__/BlogPostTemplateQuery"

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

interface ChildProps {
  items: BlogPostTemplateQuery_allMarkdownRemark_edges[]
  border?: boolean
}

const PostList: React.FC<ChildProps> = ({ items, border = false }) => {
  const classes = useStyles()
  return (
    <List component="nav" aria-label="tag list">
      {items.map(({ node }, i: number) => {
        const { slug } = node!.fields!
        const { title, date } = node!.frontmatter!
        return (
          <React.Fragment key={i}>
            <ListItemLink href={slug!} border={border}>
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
