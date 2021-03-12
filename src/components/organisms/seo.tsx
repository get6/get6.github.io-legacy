/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SEOPageQuery } from "./__generated__/SEOPageQuery"

type SEOPageProps = PageProps<SEOPageQuery>
const SEO: React.FC<SEOPageProps> = ({
  lang = "ko",
  meta = [],
  image: metaImage,
  pathname,
}) => {
  const { site } = useStaticQuery<SEOPageQuery>(
    graphql`
      query SEOPageQuery {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            keywords
            siteUrl
            social {
              twitter
              github
              gmail
              facebook
              instagram
            }
          }
        }
      }
    `
  )
  const { siteMetadata } = site!
  const { description, siteUrl, keywords, social } = siteMetadata!
  const title = siteMetadata!.title!
  const metaDescription = description || ""
  const image = metaImage && metaImage.src ? `${siteUrl}${metaImage.src}` : null
  const canonical = pathname ? `${siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords!.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: social!.twitter!,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
              ]
        )
        .concat(meta)}
    />
  )
}

export default SEO
