import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import {
  Box,
  makeStyles,
  Paper,
  Grid,
  Link,
  Typography,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TwitterIcon from "@material-ui/icons/Twitter"

import SEO from "../components/seo"
import Layout from "../components/layout"

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
  box: {
    border: "1px solid",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  sns: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const About = ({ data, location }) => {
  const classes = useStyles()
  const { author } = data.site.siteMetadata
  const siteTitle = data.site.siteMetadata.title
  const sns = data.site.siteMetadata.social

  const today = new Date()
  const birthDate = new Date("1993-06-22")

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <Box component="h1" mb={0}>
        🤣 About me
      </Box>
      <Paper variant="outlined" className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            {/* TODO SVG Hello World!가 이미지 위를 둥글게 감싸게 */}
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              style={{
                marginBottom: 0,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid item sm={12} className={classes.box}>
              <Box component="h2" m={0}>
                👨🏻‍💻 Profile
              </Box>
              <Typography variant="body1">
                Name: 황성준 / Sung Jun, Hwang
                <br />
                Age: {today.getFullYear() - birthDate.getFullYear() + 1} in
                Korea
                <br />
                Now Working as Back-End developer at{" "}
                <Link href="https://socialbx.com" target="_blank">
                  SocialBox
                </Link>
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.box}>
              <Box component="h2" m={0}>
                🌏 My SNS
              </Box>
              <Typography className={classes.sns} gutterBottom>
                <Link
                  href={"mailto:" + sns.gmail}
                  target="_blank"
                  color="inherit"
                >
                  <MailOutlineIcon /> Gmail
                </Link>
                <Link
                  href={"https://github.com/" + sns.github}
                  target="_blank"
                  color="inherit"
                >
                  <GitHubIcon /> GitHub
                </Link>
                <Link
                  href={"https://www.instagram.com/" + sns.instagram}
                  target="_blank"
                  color="inherit"
                >
                  <InstagramIcon /> Instagram
                </Link>
                <Link
                  href={"https://www.facebook.com/" + sns.facebook}
                  target="_blank"
                  color="inherit"
                >
                  <FacebookIcon /> Facebook
                </Link>
                <Link
                  href={"https://twitter.com/" + sns.twitter}
                  target="_blank"
                  color="inherit"
                >
                  <TwitterIcon /> Twitter
                </Link>
              </Typography>
              <Typography variant="caption">
                If you have any interest on your mind, please follow sns or send
                me an email :)
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.box}>
              <Box component="h2" m={0}>
                💬 To you
              </Box>
              Hello my dear!
              <br />
              I live in Seoul and like to learn development.
              <br />
              I've started to work as a software developer since November 1th
              2017
              <br />
              I like learning many things like Flutter, React, Spring, Cloud,
              Figma, Notion...and English🤣
              <br />
              Thank you for coming! 😘
            </Grid>
          </Grid>
        </Grid>
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
          gmail
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
