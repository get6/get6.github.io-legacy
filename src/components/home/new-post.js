import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

const NewPost = post => {
  const classes = useStyles()
  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
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
        </div>
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
