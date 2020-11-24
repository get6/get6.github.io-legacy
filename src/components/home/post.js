import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import FiberNewIcon from "@material-ui/icons/FiberNew"
import { isNewPost } from "../../utils/common"

const useStyles = makeStyles(_ => ({
  card: {
    border: "1px solid",
  },
  actions: {
    float: "right",
  },
}))

const Post = ({ node }) => {
  const classes = useStyles()
  const title = node.frontmatter.title || node.fields.slug
  const date = node.frontmatter.date
  const description = node.frontmatter.description || node.excerpt
  const href = node.fields.slug
  const random = Math.random()
  const isInverse = random <= 0.6
  let style = {}
  if (isInverse) {
    switch (Math.ceil(random * 10)) {
      case 1:
        style.borderColor = "coral"
        break
      case 2:
        style.borderColor = "orange"
        break
      case 3:
        style.borderColor = "beige"
        break
      case 4:
        style.borderColor = "limegreen"
        break
      case 5:
        style.borderColor = "cornflowerblue"
        break
      case 6:
        style.borderColor = "skyblue"
        break
      case 7:
        style.borderColor = "purple"
        break
      case 8:
        style.borderColor = "magenta"
        break
      case 9:
        style.borderColor = "pink"
        break
      case 10:
        style.borderColor = "wheat"
        break
      default:
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} style={style}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">{date}</Typography>
          <Typography
            variant="body2"
            component="p"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            itemProp="description"
          ></Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          {isNewPost(date) && <FiberNewIcon />}
          <Button size="small" href={href}>
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Post
