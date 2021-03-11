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

const useStyles = makeStyles(_ => ({
  card: {
    border: "1px solid",
  },
  cardDetails: {
    flex: 1,
  },
}))

type DataProps = {
  post: {
    node: {
      frontmatter: {
        title: string
        date: string
        description: string
      }
      excerpt: string
      fields: {
        slug: string
      }
    }
  }
}

const NewPost = (props: DataProps) => {
  const { post } = props
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <Box className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {post.node.frontmatter.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {post.node.frontmatter.date}
            </Typography>
            <Typography variant="body1" paragraph>
              {post.node.frontmatter.description || post.node.excerpt}
            </Typography>
            <InheritLink to={post.node.fields.slug}>
              Continue reading...
            </InheritLink>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

export default NewPost
