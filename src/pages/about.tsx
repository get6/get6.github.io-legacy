import React from "react"
import { graphql, PageProps } from "gatsby"
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

import SEO from "../components/organisms/seo"
import Layout from "../components/layout"
import Emoji from "../components/atoms/emoji"
import SNSIcon from "../components/atoms/sns-icon"
import { AboutPageQuery } from "./__generated__/AboutPageQuery"

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
    "& > a": {
      marginRight: theme.spacing(1),
    },
  },
}))

type AboutPageProps = PageProps<AboutPageQuery>
const About: React.FC<AboutPageProps> = ({ data, location }) => {
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
        <Emoji label="smile" emoji={"🤣"} /> About me
      </Box>
      <Paper elevation={20} variant="outlined" className={classes.root}>
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item>
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

            <Typography variant="body1" align="center">
              We first make our habits,
              <br />
              and then our habits make us.
              <br />- John Dryden -
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <Grid item sm className={classes.box}>
              <Box component="h2" m={0}>
                <Emoji label="developer" emoji={"👨🏻‍💻"} /> Profile
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
            <Grid item sm className={classes.box}>
              <Box component="h2" m={0}>
                <Emoji label="earth" emoji={"🌏"} /> My SNS
              </Box>
              <Grid
                item
                container
                xs={7}
                direction="row"
                className={classes.sns}
              >
                <SNSIcon
                  href={"mailto:" + sns.gmail}
                  icon={<MailOutlineIcon />}
                  iconName="Gmail"
                />
                <SNSIcon
                  href={"https://github.com/" + sns.github}
                  icon={<GitHubIcon />}
                  iconName="GitHub"
                />
                <SNSIcon
                  href={"https://www.instagram.com/" + sns.instagram}
                  icon={<InstagramIcon />}
                  iconName="Instagram"
                />
                <SNSIcon
                  href={"https://www.facebook.com/" + sns.facebook}
                  icon={<FacebookIcon />}
                  iconName="Facebook"
                />
                <SNSIcon
                  href={"https://twitter.com/" + sns.twitter}
                  icon={<TwitterIcon />}
                  iconName="Twitter"
                />
              </Grid>
              <Typography variant="caption">
                If you have any interest on your mind, please follow sns or send
                me an email :)
              </Typography>
            </Grid>
            <Grid item sm className={classes.box}>
              <Box component="h2" m={0}>
                <Emoji label="talking" emoji={"💬"} /> To you
              </Box>
              <Typography variant="body2">
                Hello my dear! <Emoji label="hand up" emoji={"🙌"} />
                <br />
                I live in Seoul and like to learn development.
                <br />
                I've started to work as a software developer since November 1th
                2017
                <br />
                I like learning many things like Flutter, React, Spring, Cloud,
                Figma, Notion...and even English 🤣
                <br />
                Thank you for coming! 😘
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutPageQuery {
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
