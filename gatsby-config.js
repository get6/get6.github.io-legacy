module.exports = {
  siteMetadata: {
    title: `Jun Wick's Blog`,
    author: {
      name: `Sung Jun, Hwang`,
      summary: `Live Well, Love Much, Laugh Often`,
    },
    description: `My development's histories`,
    siteUrl: `https://get6.github.io/`,
    social: {
      twitter: `charles9306`,
      github: `get6`,
      gmail: `ittae.com@gmail.com`,
      facebook: `sjhwang93`,
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
            name: "Linux",
            link: "/linux",
          },
          {
            name: "Cloud",
            link: "/cloud",
          },
          {
            name: "Docker",
            link: "/docker",
          },
          {
            name: "Git",
            link: "/git",
          },
        ],
      },
      {
        name: "Tools",
        link: "/tools",
        children: [
          {
            name: "Programming Tools",
            link: "/tools",
          },
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
        name: "Books",
        link: "/books",
      },
      {
        name: "Bookmarks",
        link: "/bookmarks",
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
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     offsetY: `100`,
          //     icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          //     className: `custom-class`,
          //     maintainCase: true,
          //     removeAccents: true,
          //     isIconAfterHeader: true,
          //     elements: [`h1`, `h4`],
          //   },
          // },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        // display: `standalone`,
        icon: `content/assets/favicon-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
  ],
}
