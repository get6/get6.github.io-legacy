import React from "react"
import { graphql } from "gatsby"
import { Box, Paper } from "@material-ui/core"
import SEO from "../components/organisms/seo"
import Layout from "../components/layout"
import Emoji from "../components/atoms/emoji"
import PostList from "../components/organisms/post-list"
import { TagsTemplateQuery } from "./__generated__/TagsTemplateQuery"

type TagsTemplateProps = PageProps<TagsTemplateQuery>
const TagsTemplate: React.FC<TagsTemplateProps> = ({
  pageContext,
  data,
  location,
}) => {
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
        <PostList items={edges} />
      </Paper>
    </Layout>
  )
}

export default TagsTemplate

// TODO 전체 태그 목록 보여주는 방법 생각하기
// const query =
//   Tags.tag === "all"
//     ? `
// query {
//   allMarkdownRemark(
//     limit: 2000
//     sort: { fields: [frontmatter___date], order: DESC }
//   ) {
//     totalCount
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           date
//         }
//       }
//     }
//   }
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `
//     : `
//         query($tag: String) {
//           allMarkdownRemark(
//             limit: 2000
//             sort: { fields: [frontmatter___date], order: DESC }
//             filter: { frontmatter: { tags: { in: [$tag] } } }
//           ) {
//             totalCount
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//                 frontmatter {
//                   title
//                   date
//                 }
//               }
//             }
//           }
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `

export const pageQuery = graphql`
  query TagsTemplateQuery($tag: String) {
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
