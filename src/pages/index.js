import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Alert,
  Badge,
  Card,
  CardText,
  CardTitle,
  CardColumns,
  CardSubtitle,
  Jumbotron,
  Container,
} from "reactstrap"
import Category from "../components/category"

const today = new Date()

// Jumbotron으로 감쌀 상위 카테고리
let categories = [
  "FrontEnd",
  "BackEnd",
  "DevOps",
  "Figma",
  "Notion",
  "Others",
  "AllPosts",
]

const BlogIndex = ({ data, location }) => {
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

  const siteTitle = data.site.siteMetadata.title
  const originPosts = data.allMarkdownRemark.edges
  const posts = originPosts

  // Rendering Target List
  let jumbotronList = []
  let exceptList = []
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]
    const tagName = category.toLowerCase()
    const alertName = getAlertName(category)

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

    if (0 < filteredPosts.length) {
      jumbotronList.push(
        <Jumbotron fluid key={i}>
          <Container fluid>
            <Alert color="light" id={tagName}>
              {alertName}
            </Alert>
            <CardColumns>
              {filteredPosts.map(({ node }, i) => {
                const title = node.frontmatter.title || node.fields.slug
                const random = Math.random()
                const isInverse = random <= 0.6
                const postDate = new Date(node.frontmatter.date.split(",")[0])

                let attribute = {
                  key: i,
                  body: true,
                  inverse: isInverse,
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
                  <Card {...attribute}>
                    <article
                      key={node.fields.slug}
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <CardTitle>
                        <Link
                          to={node.fields.slug}
                          itemProp="url"
                          style={isInverse ? { color: "white" } : null}
                        >
                          {title}
                        </Link>{" "}
                        {i < 1 ||
                          (Math.round(
                            Math.abs((postDate - today) / (24 * 60 * 60 * 1000))
                          ) < 15 && (
                            <Badge color={isInverse ? "light" : "secondary"}>
                              ✨new✨
                            </Badge>
                          ))}
                      </CardTitle>
                      <CardSubtitle>
                        <small className={!isInverse ? "text-muted" : null}>
                          {node.frontmatter.date}
                        </small>
                      </CardSubtitle>
                      <CardText
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                        itemProp="description"
                      ></CardText>
                    </article>
                  </Card>
                )
              })}
            </CardColumns>
          </Container>
        </Jumbotron>
      )
    } else {
      exceptList.push(category)
    }
  }

  categories = categories.filter(category => {
    return !(-1 < exceptList.indexOf(category))
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Category categories={categories} getAlertName={getAlertName} />
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
