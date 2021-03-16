import React from "react"
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import InheritLink from "../atoms/inherit-link"
import { IndexPageQuery_allMarkdownRemark_edges } from "../../pages/__generated__/IndexPageQuery"

const useStyles = makeStyles(_ => ({
  card: {
    border: "1px solid",
  },
  cardDetails: {
    flex: 1,
  },
}))

interface ChildProps {
  post: IndexPageQuery_allMarkdownRemark_edges
}

const NewPost: React.FC<ChildProps> = props => {
  const { post } = props
  const { frontmatter, fields } = post.node
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <Box className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              <InheritLink to={fields!.slug!}>{frontmatter!.title}</InheritLink>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {frontmatter!.date}
            </Typography>
            <Typography variant="body1" paragraph>
              {frontmatter?.description || post.node.excerpt}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

export default NewPost
