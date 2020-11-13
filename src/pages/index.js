import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Grid, Paper } from "@material-ui/core"
import SEO from "../components/seo"
import Layout from "../components/layout"
import NewPost from "../components/home/new-post"
import PostsPerCategory from "../components/home/posts-per-category"

const useStyles = makeStyles(theme => ({
  root: {},
  gridList: {
    // width: 800,
    height: "auto",
  },
  postList: {
    // margin: theme.spacing(2),
    padding: theme.spacing(2),
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

  // 페이지 제목
  const siteTitle = data.site.siteMetadata.title
  // 메뉴 카테고리
  let categories = data.site.siteMetadata.categories
  // 게시글들
  const posts = data.allMarkdownRemark.edges
  // 최신 게시글 목록
  const newPosts = posts.filter(post => isNewPost(post))

  // Rendering Target List
  let postsPerCategories = []
  let exceptList = []

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]
    const tagName = category.name.toLowerCase()

    let filteredIndex = []
    let filteredPosts = posts.filter((post, j) => {
      const lowerTags = post.node.frontmatter.tags.map(v => v.toLowerCase())
      if (-1 < lowerTags.indexOf(tagName)) {
        filteredIndex.push(j)
        return true
      }
      return false
    })

    // 카테고리와 일치하는 항목만 담기
    if (0 < filteredPosts.length) {
      postsPerCategories.push(
        <PostsPerCategory key={i} category={category} posts={filteredPosts} />
      )
    } else if (tagName == "all posts") {
      // TODO 전체 목록을 if에서 빼낼 수 있는지 확인
      postsPerCategories.push(
        <PostsPerCategory key={i} category={category} posts={posts} />
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
    <Layout location={location} title={siteTitle}>
      <SEO title="All Posts" />
      <Box component="h1" mb={0}>
        🗽 Posts
      </Box>
      {/* <Category categories={categories} getAlertName={getAlertName} /> */}
      <Paper elevation={20} className={classes.root}>
        {0 < newPosts.length && (
          <Grid container className={classes.postList}>
            <Grid item xs={12}>
              <Box component="h2" mt={0}>
                ✨ New Post
              </Box>
            </Grid>
            <Grid item container spacing={2}>
              {newPosts.map((post, i) => (
                <NewPost key={i} {...post} />
              ))}
            </Grid>
          </Grid>
        )}
        {postsPerCategories.map(postsPerCategory => {
          return postsPerCategory
        })}
      </Paper>
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
