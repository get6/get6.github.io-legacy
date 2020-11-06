import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "../components/category"
import FiberNewIcon from "@material-ui/icons/FiberNew"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  GridList,
  GridListTile,
  Chip,
  ListSubheader,
  Typography,
} from "@material-ui/core"

import SEO from "../components/seo"
import Layout from "../components/layout"
import NewPost from "../components/new-post"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 800,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  card: {
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  },
}))

const BlogIndex = ({ data, location }) => {
  const classes = useStyles()
  // 오늘 날짜
  const today = new Date()
  // 최근 글 기준일
  const limitNewPostDay = 14
  // 최근 작성된 게시글인지 확인
  const isNewPost = post => {
    // json 형식으로 오는 객체 중에 node가 없는 형식이 있음
    if (!post.node) {
      return false
    }
    // post.frontmatter.date
    const postDate = new Date(post.node.frontmatter.date.split(",")[0])
    return (
      Math.round(Math.abs((postDate - today) / (24 * 60 * 60 * 1000))) <=
      limitNewPostDay
    )
  }
  // Category명 구하기
  const getAlertName = category => {
    let alertName = category
    switch (category.toLowerCase()) {
      case "frontend":
        alertName = "🌟 " + alertName
        break
      case "backend":
        alertName = "🔥 " + alertName
        break
      case "devops":
        alertName = "☁️ " + alertName
        break
      case "figma":
        alertName = "🌈 " + alertName
        break
      case "notion":
        alertName = "💡 " + alertName
        break
      case "others":
        alertName = "🙋‍♀️ " + alertName
        break
      default:
        alertName = "😍 All Posts"
    }
    return alertName
  }

  // 페이지 제목
  const siteTitle = data.site.siteMetadata.title
  // 메뉴 카테고리
  let categories = data.site.siteMetadata.categories
  // 게시글들
  const posts = data.allMarkdownRemark.edges
  // 최신 게시글 목록
  const newPosts = posts.filter(post => isNewPost(post))

  // Rendering Target List
  let jumbotronList = []
  let exceptList = []

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]
    const tagName = category.name.toLowerCase()
    const alertName = getAlertName(category.name)

    let filteredIndex = []
    let filteredPosts = posts.filter((post, j) => {
      const lowerTags = post.node.frontmatter.tags.map(v => v.toLowerCase())
      if (-1 < lowerTags.indexOf(tagName)) {
        filteredIndex.push(j)
        return true
      }
      return false
    })

    // 마지막은 전체 목록으로 표시한다.
    if (tagName === "allposts") {
      filteredPosts = posts
    }

    // 카테고리와 일치하는 항목만 담기
    if (0 < filteredPosts.length) {
      jumbotronList.push(
        <div className={classes.root} key={i}>
          <GridList className={classes.gridList} cols={3}>
            <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
              <ListSubheader component="div" id={tagName}>
                {alertName} <Chip size="small" label={filteredPosts.length} />
              </ListSubheader>
            </GridListTile>
            {filteredPosts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
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
                <GridListTile {...attribute}>
                  <Card className={classes.card.root} variant="outlined">
                    <CardContent>
                      {/*<Link
                          to={node.fields.slug}
                          itemProp="url"
                          style={isInverse ? { color: "white" } : null}
                        > */}
                      <Typography variant="h5" component="h2">
                        {title}
                      </Typography>
                      {isNewPost(node) && (
                        <>
                          ✨<FiberNewIcon />✨
                        </>
                      )}
                      <Typography
                        className={classes.card.pos}
                        color="textSecondary"
                      >
                        {node.frontmatter.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                        itemProp="description"
                      ></Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={node.fields.slug}>
                        More
                      </Button>
                    </CardActions>
                  </Card>
                </GridListTile>
              )
            })}
          </GridList>
        </div>
      )
    } else {
      exceptList.push(category)
    }
  }

  // 게시글이 없는 메뉴를 제외한 목록 반환
  categories = categories.filter(category => {
    return !(-1 < exceptList.indexOf(category))
  })

  return (
    <Layout location={location} title={siteTitle} categories={categories}>
      <SEO title="All Posts" />
      {/* <Bio /> */}
      <Category categories={categories} getAlertName={getAlertName} />
      {0 < newPosts.length && (
        <Grid container spacing={4}>
          {newPosts.map((post, i) => (
            <NewPost key={i} {...post} />
          ))}
        </Grid>
      )}
      {jumbotronList.map(jombotron => {
        return jombotron
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        categories {
          name
          link
          children {
            name
            link
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD, MMMM")
            title
            description
            tags
          }
        }
      }
    }
  }
`
