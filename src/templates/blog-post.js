import React from 'react'
import { Link, graphql } from 'gatsby'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Meta from '../components/meta'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { blogTitle, blogSiteName, blogUrl } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={blogTitle}>
      <Meta
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        siteName={blogSiteName}
        siteUrl={blogUrl}
        // TODO add cover image to each blogpost for page image here
      />
      <article>
        <header style={tw`font-sans`}>
          <h1 style={tw`text-4xl mb-0 font-sans`}>{post.frontmatter.title}</h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section style={tw`font-serif`} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ borderStyle: 'solid', borderWidth: 0.5 }} />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        blogTitle
        blogSiteName
        blogUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
