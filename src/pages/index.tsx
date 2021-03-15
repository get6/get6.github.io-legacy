import React from "react"
import { graphql, PageProps } from "gatsby"
import { Box, Grid, makeStyles, Paper } from "@material-ui/core"
import SEO from "../components/organisms/seo"
import Layout from "../components/layout"
import NewPost from "../components/organisms/new-post"
import PostsPerCategory from "../components/organisms/posts-per-category"
import ProTip from "../components/molecules/pro-tip"
import Emoji from "../components/atoms/emoji"
import { isNewPost } from "../utils/common"
import {
  IndexPageQuery,
  IndexPageQuery_site_siteMetadata_categories,
} from "./__generated__/IndexPageQuery"

const useStyles = makeStyles(theme => ({
  postList: {
    padding: theme.spacing(2),
  },
}))

type IndexPageProps = PageProps<IndexPageQuery>
const BlogIndex: React.FC<IndexPageProps> = ({ data, location }) => {
  const classes = useStyles()

  const siteMetadata = data.site!.siteMetadata!
  // 페이지 제목
  const siteTitle = siteMetadata.title
  // 메뉴 카테고리
  let categories = siteMetadata.categories!
  // 게시글들
  const posts = data.allMarkdownRemark.edges
  // 최신 게시글 목록
  const newPosts = posts.filter(post => isNewPost(post.node.frontmatter!.date))

  // Rendering Target List
  let postsPerCategories = []
  let exceptList: IndexPageQuery_site_siteMetadata_categories[] = []

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]!
    if (!category) {
      continue
    }
    const tagName = category.name!.toLowerCase()

    let filteredIndex = []
    let filteredPosts = posts.filter((post, j) => {
      const lowerTags = post.node.frontmatter!.tags!.map(v => v!.toLowerCase())
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
    } else {
      exceptList.push(category)
    }
  }

  // 전체 목록
  postsPerCategories.push(
    <PostsPerCategory
      key={categories.length}
      category={
        {
          link: "/all",
          name: "All Posts",
        } as IndexPageQuery_site_siteMetadata_categories
      }
      posts={posts}
    />
  )

  // 게시글이 없는 메뉴를 제외한 목록 반환
  categories = categories.filter(category => {
    return !(-1 < exceptList.indexOf(category!))
  })

  return (
    <Layout location={location} title={siteTitle!}>
      <SEO title="All Posts" />
      <Box component="h1" mb={0}>
        <Emoji label="postit" emoji={"🗒"} /> Posts
      </Box>
      {/* <Category categories={categories} getAlertName={getAlertName} /> */}
      <Paper elevation={20}>
        {0 < newPosts.length && (
          <Grid container className={classes.postList}>
            <Grid item xs={12}>
              <Box component="h2" mt={0}>
                <Emoji label="shining" emoji={"✨"} /> New Post
              </Box>
            </Grid>
            <Grid item container spacing={2}>
              {newPosts.map((post, i) => (
                <NewPost key={i} post={post} />
              ))}
            </Grid>
          </Grid>
        )}
        <Grid item container>
          <ProTip>Click the below one of buttons to open.</ProTip>
        </Grid>
        <Grid item>
          {postsPerCategories.map(postsPerCategory => {
            return postsPerCategory
          })}
        </Grid>
      </Paper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPageQuery {
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
