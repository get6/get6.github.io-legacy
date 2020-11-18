import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Grid, Paper, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Emoji from "../components/emoji"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
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

  console.log(data)

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
        <Grid container spacing={0}>
          <Grid item container alignContent="flex-end">
            {post.frontmatter.date}
          </Grid>
          <Grid item xs>
            <article itemScope itemType="http://schema.org/Article">
              <Box
                component="section"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </article>
          </Grid>
        </Grid>
        <Grid item>
          <Box>연관 글</Box>
        </Grid>

        <Grid item></Grid>
      </Paper>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <footer>
        <Bio />
      </footer>
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
