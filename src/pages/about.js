import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import {
  GrInstagram,
  GrFacebook,
  GrGithub,
  GrTwitter,
  GrMailOption,
} from "react-icons/gr"

/**
 * 나의 대한 이력
 * 각종 SNS 아이디
 * 이메일
 *
 */

const About = ({ data, location }) => {
  const { author } = data.site.siteMetadata
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <h1>About me</h1>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h4>황성준</h4>
      <h4>Sung Jun, Hwang</h4>
      <GrMailOption />
      <GrGithub />
      <GrInstagram />
      <GrTwitter />
      <GrFacebook />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          facebook
          instagram
        }
        author {
          name
          summary
        }
      }
    }
  }
`
