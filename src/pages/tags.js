import React, { useState } from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Chip from "@material-ui/core/Chip"
import { Box, Button, makeStyles, Grid, Divider } from "@material-ui/core"
import ProTip from "../components/pro-tip"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 70,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const classes = useStyles()
  // 알파벳 버튼 목록
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
  // GraphQL에서 group으로 짝지어진 tags 목록 반환
  const tags = group
  // 선택한 버튼 값
  const [selectedButton, setSelectedButton] = useState("")
  // 선택한 필터 목록
  const [selectedTags, setSelectedTags] = useState([])
  // 선택한 버튼 효과

  // 버튼 클릭시 발생할 이벤트 (필터 목록 반환)
  const clickTagButton = e => {
    const targetValue = e.target.textContent
    if (selectedButton == targetValue) {
      console.log(1)
      setSelectedTags([])
      setSelectedButton("")
      return
    }
    const filterdTags = tags.filter(tag => {
      return (
        targetValue.toLocaleLowerCase() ==
        tag.fieldValue.charAt(0).toLocaleLowerCase()
      )
    })
    setSelectedTags(filterdTags)
    setSelectedButton(targetValue)
  }

  return (
    <Layout location={location} title={title}>
      <Helmet title={title} />
      <Box component="h2">🏷 Tags</Box>
      {/* a to z 목록을 제공해 걸러진 tag 목록 제공 */}
      <ProTip>Please click on the button below to filter some tag.</ProTip>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item>
              {alphabet.map((tag, i) => (
                <Button
                  {...(tag == selectedButton
                    ? { variant: "outlined", color: "primary" }
                    : {})}
                  key={i}
                  onClick={e => clickTagButton(e)}
                >
                  {tag}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {selectedTags.map((tag, i) => (
              <Grid item key={i}>
                <Chip
                  size="small"
                  clickable
                  label={tag.fieldValue + " " + tag.totalCount}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Divider />
        <Box component="h3">All Tags</Box>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {tags.map((tag, i) => (
              // <ListGroupItem
              //   key={tag.fieldValue}
              //   tag="a"
              //   href={"/tags/" + kebabCase(tag.fieldValue)}
              // >
              <Grid item key={i}>
                <Chip
                  size="small"
                  clickable
                  label={tag.fieldValue + " " + tag.totalCount}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
