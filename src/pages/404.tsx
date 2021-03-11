import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/organisms/seo"
import { NotFoundPageQuery } from "./__generated__/NotFoundPageQuery"

type NotFoundPageProps = PageProps<NotFoundPageQuery>
const NotFoundPage: React.FC<NotFoundPageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
