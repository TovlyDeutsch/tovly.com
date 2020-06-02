import React from 'react'
import { graphql, PageProps } from 'gatsby'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Meta from '../components/meta'
import { BlueHoverLink } from '../pages/blog'

type Data = {
  markdownRemark: {
    id: string
    excerpt: string
    html: string
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
  site: {
    siteMetadata: {
      blogTitle: string
      blogSiteName: string
      blogUrl: string
    }
  }
}

type adjacentPage = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

type pageContext = {
  previous: adjacentPage
  next: adjacentPage
}

const BlogPostTemplate = ({ data, pageContext, location }: PageProps<Data, pageContext>) => {
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
        <header>
          <h1 style={tw`text-4xl`}>{post.frontmatter.title}</h1>
          <p style={tw`mb-4`}>{post.frontmatter.date}</p>
        </header>
        <section style={tw`font-serif`} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ ...tw`border-solid my-4`, borderWidth: 0.5 }} />
        <footer>
          <Bio justify="left" />
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
              <BlueHoverLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </BlueHoverLink>
            )}
          </li>
          <li>
            {next && (
              <BlueHoverLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </BlueHoverLink>
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
