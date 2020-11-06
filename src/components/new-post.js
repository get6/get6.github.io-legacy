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
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={post.node.fields.slug}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.node.frontmatter.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.node.frontmatter.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.node.frontmatter.description || post.node.excerpt}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          {/* 
          <Hidden smDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageText}
            />
          </Hidden>
           */}
        </Card>
      </CardActionArea>
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
