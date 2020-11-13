import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"
import FiberNewIcon from "@material-ui/icons/FiberNew" // TODO 날짜 비교해서 아이콘 붙여주기

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const date = node.frontmatter.date
  const description = node.frontmatter.description || node.excerpt
  const href = node.fields.slug

  const random = Math.random()
  const isInverse = random <= 0.6

  let attribute = {}
  // TODO 랜덤요소로 재밌게 하기
  if (isInverse) {
    switch (Math.ceil(random * 10)) {
      case 1:
        attribute.color = "primary"
        break
      case 2:
        attribute.color = "success"
        break
      case 3:
        attribute.color = "info"
        break
      case 4:
        attribute.color = "warning"
        break
      case 5:
        attribute.color = "danger"
        break
      default:
        attribute.style = {
          backgroundColor: "#333",
          borderColor: "#333",
        }
    }
  }
  return (
    <Card>
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
      <CardActions>
        <Button size="small" href={href}>
          More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
