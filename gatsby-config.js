module.exports = {
  siteMetadata: {
    siteName: 'Tovly Deutsch',
    blogSiteName: "Tovly's Blog",
    siteTitle: 'Tovly Deutsch – Researcher, Software Engineer, & Filmmaker', // Header, bolded, < 88 characters for FB
    blogTitle: "Tovly's Blog – Musings on CS, Linguistics, & More",
    siteUrl: 'https://tovly.com',
    blogUrl: 'https://tovly.com/blog',
    // description appears below title, < 100 characters for FB
    description: 'Portfolio for Tovly Deutsch, researcher and software engineer working on NLP and ML',
    blogDescription: 'Blog of Tovly Deutsch – researcher, software engineer, & filmmaker',
    author: {
      name: 'Tovly Deutsch',
      summary: 'test summary',
    },
    social: {
      twitter: { url: 'https://twitter.com/_tovly', handle: '@_tovly' },
    },
    metaFaceImg: 'https://tovly.com/face_small.jpg',
    rssIcon: 'https://tovly.com/favicon.png',
  },
  plugins: [
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/profile-photos`,
        name: 'profile-photos',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              markdownCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-167613160-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tovly Deutsch – Software Engineer, Researcher, & Filmmaker.',
        short_name: 'Tovly Deutsch',
        description:
          'Tovly Deutsch – Software Engineer, Researcher, & Filmmaker. Creator of Bulk Sheet Manager and Attendance Sorter Google Sheets Add-ons',
        start_url: '/',
        background_color: '#191e38',
        theme_color: '#6574cd',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                description: blogDescription
                blogUrl
                siteUrl
                site_url: blogUrl
                image_url: rssIcon
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const filteredPosts = allMarkdownRemark.edges.filter(
                edge => edge.node.frontmatter && edge.node.frontmatter.status !== 'draft'
              )
              const mappedEdges = filteredPosts.map(edge => {
                const thumbnail = edge.node.frontmatter.thumbnail
                const enclosureUrl = thumbnail && `${site.siteMetadata.siteUrl}${thumbnail.childImageSharp.fixed.src}`
                const postLink = `${site.siteMetadata.blogUrl}/${edge.node.fields.slug}`
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: postLink,
                  guid: postLink,
                  enclosure: enclosureUrl && {
                    url: enclosureUrl,
                  },
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }
              })
              return mappedEdges
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
                        status
                        thumbnail {
                          childImageSharp {
                            fixed(width: 1200) {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Tovly's Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-netlify',
  ],
}
