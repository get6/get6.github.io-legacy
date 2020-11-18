import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import {
  Box,
  Hidden,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Emoji from "../components/emoji"

const ListItemLink = props => {
  return <ListItem button component="a" {...props} />
}

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1)
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${upperTag}`
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={upperTag} />
      <Box component="h1" mb={0}>
        <Emoji label="lightbulb" emoji={"💡"} /> {tagHeader}
      </Box>
      <Paper elevation={20}>
        <List component="nav" aria-label="tag list">
          {edges.map(({ node }, i) => {
            const { slug } = node.fields
            const { title, date } = node.frontmatter
            return (
              <React.Fragment key={i}>
                <ListItemLink href={slug}>
                  <ListItemText primary={title} />
                  <Hidden xsDown>
                    <ListItemSecondaryAction>
                      <Box component="span">{date}</Box>
                    </ListItemSecondaryAction>
                  </Hidden>
                </ListItemLink>
              </React.Fragment>
            )
          })}
        </List>
      </Paper>
    </Layout>
  )
}

Tags.protoTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

// TODO 전체 태그 목록 보여주는 방법 생각하기
const query =
  Tags.tag === "all"
    ? `
query {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    totalCount
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
  site {
    siteMetadata {
      title
    }
  }
}
`
    : `
        query($tag: String) {
          allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
          ) {
            totalCount
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
          site {
            siteMetadata {
              title
            }
          }
        }
      `

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
