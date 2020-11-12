import React from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  Hidden,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import FiberNewIcon from "@material-ui/icons/FiberNew" // TODO 날짜 비교해서 아이콘 붙여주기

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

// 카테고리 별 게시글 목록
const PostsPerCategory = ({ category, posts }) => {
  const classes = useStyles()

  // Category명 구하기
  const displayCategoryName = name => {
    let displatName = name
    switch (name.toLowerCase()) {
      case "frontend":
        displatName = "🌟 " + displatName
        break
      case "backend":
        displatName = "🔥 " + displatName
        break
      case "devops":
        displatName = "☁️ " + displatName
        break
      case "tools":
        displatName = "🛠 " + displatName
        break
      case "others":
        displatName = "🙋‍♀️ " + displatName
        break
      case "all posts":
        displatName = "😍 All Posts"
        break
    }
    return displatName
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={category.name + "-content"}
        id={category.name + "-header"}
      >
        <Box flexGrow={1}>
          <Typography className={classes.heading}>
            {displayCategoryName(category.name)}
          </Typography>
        </Box>
        {/* Category child가 많아지면 xsDown -> smDown으로 변경 */}
        <Hidden xsDown>
          <Typography className={classes.secondaryHeading}>
            {category.children &&
              category.children.map(({ name }) => {
                const upperName = name.charAt(0).toUpperCase() + name.slice(1)
                return upperName + " / "
              })}
            {" " + posts.length} posts
          </Typography>
        </Hidden>
      </AccordionSummary>
      <AccordionDetails>
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title || node.fields.slug
          const date = node.frontmatter.date
          const description = node.frontmatter.description || node.excerpt
          const href = node.fields.slug

          const random = Math.random()
          const isInverse = random <= 0.6

          let attribute = {
            key: i,
          }
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
            <Card key={i}>
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
        })}
      </AccordionDetails>
    </Accordion>
  )
}

export default PostsPerCategory
