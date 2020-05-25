module.exports = {
  siteMetadata: {
    siteTitle: 'Tovly Deutsch – Software Engineer, Researcher, & Filmmaker',
    blogTitle: "Tovly's Blog",
    siteUrl: 'https://tovly.com',
    description: 'Tovly Deutsch – Software Engineer, Researcher, & Filmmaker',
    author: {
      name: 'Tovly Deutsch',
      summary: 'test summary',
    },
    social: {
      twitter: 'https://twitter.com/_tovly',
    },
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
        path: `${__dirname}/src/sites/`,
        name: 'sites',
      },
    },
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
        icon: 'src/favicon.png',
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-netlify',
  ],
}
