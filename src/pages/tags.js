import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Badge, ListGroup, ListGroupItem } from "reactstrap"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  return (
    <Layout location={location} title={title}>
      <div>
        <Helmet title={title} />
        <div>
          <h1>Tags</h1>
          <ListGroup>
            {group.map(tag => (
              <ListGroupItem
                key={tag.fieldValue}
                tag="a"
                href={"/tags/" + kebabCase(tag.fieldValue)}
              >
                {tag.fieldValue} <Badge>{tag.totalCount}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
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
