import React from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  makeStyles,
  Typography,
  Hidden,
  Grid,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Post from "./post"
import {
  IndexPageQuery_allMarkdownRemark_edges,
  IndexPageQuery_site_siteMetadata_categories,
} from "../../pages/__generated__/IndexPageQuery"

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))
type DataProps = {
  // 메뉴 카테고리
  category: IndexPageQuery_site_siteMetadata_categories
  // 게시글들
  posts: IndexPageQuery_allMarkdownRemark_edges[]
}
// 카테고리 별 게시글 목록
const PostsPerCategory: React.FC<DataProps> = ({ category, posts }) => {
  const classes = useStyles()

  // Category명 구하기
  const displayCategoryName = (name: string) => {
    let displatName = name
    switch (name.toLowerCase()) {
      case "frontend":
        displatName = "⭐️ " + displatName
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
      default:
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
            {displayCategoryName(category.name!)}
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
        <Grid container spacing={1}>
          {posts.map(({ node }, i) => {
            return <Post key={i} node={node} />
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default PostsPerCategory
