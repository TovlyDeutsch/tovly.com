module.exports = {
  siteMetadata: {
    siteName: 'tovly.com',
    blogSiteName: 'tovly.com/blog',
    siteTitle: 'Tovly Deutsch – Software Engineer, Researcher, & Filmmaker', // Header, bolded, < 88 characters for FB
    blogTitle: "Tovly's Blog",
    siteUrl: 'https://tovly.com',
    blogUrl: 'https://tovly.com/blog',
    // description appears below title, < 100 characters for FB
    description: 'Portfolio for Tovly Deutsch, software engineer and researcher working on NLP and ML',
    blogDescription: 'Blog of Tovly Deutsch – software engineer, researcher, & filmmaker',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
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
                siteUrl
                site_url: blogUrl
                image_url: rssIcon
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
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
