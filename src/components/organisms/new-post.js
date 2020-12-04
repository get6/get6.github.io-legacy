import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(_ => ({
  card: {
    border: "1px solid",
  },
  cardDetails: {
    flex: 1,
  },
}))

const NewPost = post => {
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
            <Typography
              variant="caption"
              component="a"
              href={post.node.fields.slug}
            >
              Continue reading...
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

NewPost.propTypes = {
  post: PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }),
}

export default NewPost
