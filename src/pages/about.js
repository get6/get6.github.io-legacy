import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * 나의 대한 이력
 * 각종 SNS 아이디
 * 이메일
 *
 */
const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <h1>About me</h1>
      <p>{siteTitle}</p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          facebook
          instagram
        }
      }
    }
  }
`
