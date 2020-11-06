module.exports = {
  siteMetadata: {
    title: `Jun Wick's Blog`,
    author: {
      name: `Sung Jun, Hwang`,
      summary: `I'm trying to get closer to say "Hello, World!"`,
    },
    description: `My development's histories`,
    siteUrl: `https://get6.github.io/`,
    social: {
      twitter: `charles9306`,
      github: `get6`,
      facebook: ``,
      instagram: `hwang_sung_jun93`,
    },
    keywords: [`development`, "developer", `개발`, `개발자`],
    categories: [
      {
        name: "FrontEnd",
        link: "/frontend",
        children: [
          {
            name: "Flutter",
            link: "/flutter",
          },
          {
            name: "React",
            link: "/react",
          },
          {
            name: "Vue",
            link: "/vue",
          },
        ],
      },
      {
        name: "BackEnd",
        link: "/backend",
        children: [
          {
            name: "Spring",
            link: "/spring",
          },
          {
            name: "SQL",
            link: "/sql",
          },
        ],
      },
      {
        name: "DevOps",
        link: "/devops",
        children: [
          {
            name: "linux",
            link: "/linux",
          },
          {
            name: "cloud",
            link: "/cloud",
          },
          {
            name: "docker",
            link: "/docker",
          },
          {
            name: "git",
            link: "/git",
          },
        ],
      },
      {
        name: "Tools",
        link: "/tools",
        children: [
          {
            name: "Atlassian",
            link: "/atlassian",
          },
          {
            name: "Notion",
            link: "/notion",
          },
          {
            name: "Figma",
            link: "/figma",
          },
        ],
      },
      {
        name: "Others",
        link: "/others",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-178244808-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Sung Jun's Blog RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developer Sung Jun's Blog`,
        short_name: `Sung Jun's Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        // display: `minimal-ui`,
        display: `standalone`,
        icon: `content/assets/favicon-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-smoothscroll`,
  ],
}
