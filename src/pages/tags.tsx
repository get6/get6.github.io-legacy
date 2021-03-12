import React, { useState } from "react"
import { graphql, Link, PageProps } from "gatsby"
import _ from "lodash"
import { Box, Button, Chip, Divider, Grid, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import ProTip from "../components/molecules/pro-tip"
import Emoji from "../components/atoms/emoji"
import SEO from "../components/organisms/seo"
import {
  TagsPageQuery,
  TagsPageQuery_allMarkdownRemark_group,
} from "./__generated__/TagsPageQuery"

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

type TagsPageProps = PageProps<TagsPageQuery>
const TagsPage: React.FC<TagsPageProps> = ({ data, location }) => {
  const { siteMetadata } = data.site!
  const title = siteMetadata!.title!
  const { group } = data.allMarkdownRemark!

  const classes = useStyles()
  // 알파벳 버튼 목록
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
  // GraphQL에서 group으로 짝지어진 tags 목록 반환
  const tags = group
  // 선택한 버튼 값
  const [selectedButton, setSelectedButton] = useState("")
  // 선택한 필터 목록
  const [selectedTags, setSelectedTags] = useState<
    TagsPageQuery_allMarkdownRemark_group[]
  >([])
  // 선택한 버튼 효과
  // GIFTCARD2021
  //https://www.amazon.com/gp/cobrandcard/marketing.html?pr=conplcc&inc=a7e7ebeb-a30a-4026-96ee-68792eef79d6&ts=edbo9fh2pahictb7j1x5ye2bhniqp93&dasin=B084TFH4BN&plattr=math&place=priceblock&imp=8aba762a-5e5d-4ca7-a625-b8202564838f
  // 버튼 클릭시 발생할 이벤트 (필터 목록 반환)
  const clickTagButton = (e: any) => {
    const targetValue = e.target.textContent
    if (selectedButton === targetValue) {
      setSelectedTags([])
      setSelectedButton("")
      return
    }
    const filterdTags = tags.filter(tag => {
      return (
        targetValue.toLocaleLowerCase() ===
        tag.fieldValue!.charAt(0).toLocaleLowerCase()
      )
    })
    setSelectedTags(filterdTags)
    setSelectedButton(targetValue)
  }

  return (
    <Layout location={location} title={title}>
      <SEO title="Tags" />
      <Box component="h1" mb={0}>
        <Emoji label="tag image" emoji={"🏷"} /> Tags
      </Box>
      {/* a to z 목록을 제공해 걸러진 tag 목록 제공 */}
      <ProTip>Please click on the button below to filter some tag.</ProTip>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item container style={{ margin: "auto" }}>
          {alphabet.map((tag, i) => (
            <Button
              {...(tag === selectedButton
                ? { variant: "outlined", color: "primary" }
                : {})}
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                clickTagButton(e)
              }
            >
              {tag}
            </Button>
          ))}
        </Grid>
        <Divider />

        <Grid item container justify="center" spacing={1}>
          {selectedTags.map((tag, i) => (
            <Grid item key={i}>
              <Link
                to={"/tags/" + _.kebabCase(tag.fieldValue!)}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  size="small"
                  clickable
                  label={tag.fieldValue + " " + tag.totalCount}
                />
              </Link>
            </Grid>
          ))}
        </Grid>

        <Divider />
        <Box component="h1">All Tags</Box>

        <Grid item container spacing={1}>
          {tags.map((tag, i) => (
            <Grid item key={i}>
              <Link
                to={"/tags/" + _.kebabCase(tag.fieldValue!)}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  size="small"
                  clickable
                  label={tag.fieldValue + " " + tag.totalCount}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPageQuery {
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
