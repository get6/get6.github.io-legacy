import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { Box, makeStyles, Paper, Grid } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TwitterIcon from "@material-ui/icons/Twitter"

/**
 * 나의 대한 이력
 * 각종 SNS 아이디
 * 이메일
 *
 */

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  contents: {
    display: "flex",
  },
}))

const About = ({ data, location }) => {
  const classes = useStyles()
  const { author } = data.site.siteMetadata
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <Box component="h2">🤣 About me</Box>
      <Paper variant="outlined" className={classes.root}>
        <Box component="span" display="flex">
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
          <Box componen="span">
            <h4>이름: 황성준</h4>
            <h4>Name: Sung Jun, Hwang</h4>
            <Box component="p" border={1} padding={1}>
              <h4>Description</h4>
              Hello my dear!
              <br />
              I've started to work as a software developer since November 1th
              2017.
              <br />I like to study about development. So I like Flutter, React,
              Spring, aws ...
              <br />I will release some service.
              <br /> Thank you for coming! 😘
            </Box>
            <Box component="h5">🌏 My SNS</Box>
            <Grid container spacing={3}>
              <Grid item>
                <MailOutlineIcon />
                <GitHubIcon />
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
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
