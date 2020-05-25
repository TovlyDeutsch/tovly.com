import React from 'react'
import { Link, graphql } from 'gatsby'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { blogTitle } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={blogTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
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
