import React from "react"
import { Link, graphql } from "gatsby"
import {
  Box,
  Divider,
  Fab,
  Grid,
  Paper,
  makeStyles,
  Hidden,
} from "@material-ui/core"
import { ArrowBack, ArrowForward } from "@material-ui/icons"
import Layout from "../components/layout"
import SEO from "../components/organisms/seo"
import Bio from "../components/organisms/bio"
import Emoji from "../components/atoms/emoji"
import PostList from "../components/organisms/post-list"
import { shuffle } from "../utils/common"
import Utterances from "../components/molecules/utterances"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  article: {
    overflowX: "auto",
  },
  date: {
    float: "right",
  },
  nav: {
    margin: 0,
    width: "auto",
    display: `flex`,
    flexWrap: `wrap`,
    listStyle: `none`,
    alignItems: "center",
    justifyContent: `space-between`,
    paddingTop: theme.spacing(2),
    "& li h6": {
      color: "inherit",
    },
    "& li > a": {
      color: "inherit",
    },
    "& li > a > button": {
      color: "inherit",
      boxShadow: "none",
      backgroundColor: "inherit",
    },
  },
}))
/**
 * 들어가야 할 것
 * 목차 목록 (클릭 시 이동)
 * 연관글
 * 댓글
 * 스타일잡기
 */
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const classes = useStyles()
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  const { previous, next } = pageContext
  // TODO: TOC 만들기
  const tableOfContents = post.tableOfContents

  const relativePosts = shuffle(data.allMarkdownRemark.edges).slice(0, 4)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={location.pathname}
      />
      <Box component="h1" mb={0}>
        <Emoji label="smile" emoji={"📇"} /> {post.frontmatter.title}
      </Box>
      <Paper elevation={20} variant="outlined" className={classes.root}>
        <Grid
          component="article"
          itemScope
          itemType="http://schema.org/Article"
          className={classes.article}
        >
          <Box className={classes.date}>{post.frontmatter.date}</Box>
          <Grid
            item
            component="section"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </Grid>
        <Divider />
        {0 < relativePosts.length && (
          <Grid item>
            <Box component="h3" mt={1} mb={0}>
              <Emoji label="smile" emoji={"🖥"} /> 연관 글
            </Box>
            <Grid item>
              <PostList items={relativePosts} border />
            </Grid>
          </Grid>
        )}

        <Grid item component="nav">
          <Box component="ul" className={classes.nav}>
            <Box component="li">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Fab>
                    <ArrowBack />
                  </Fab>{" "}
                  {previous.frontmatter.title}
                </Link>
              )}
            </Box>
            <Hidden xsDown>
              <Box component="li">
                <Bio />
              </Box>
            </Hidden>
            <Box component="li">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  <Fab>
                    {" "}
                    <ArrowForward />
                  </Fab>
                </Link>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Utterances />
        </Grid>
      </Paper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
