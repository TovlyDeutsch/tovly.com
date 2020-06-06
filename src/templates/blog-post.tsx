import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import BlogLayout from '../components/BlogLayout'
import MetaAndStyles from '../components/MetaAndStyles'

type Data = {
  markdownRemark: {
    id: string
    excerpt: string
    html: string
    frontmatter: {
      title: string
      date: string
      description: string
      mediumLink: string | null
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

const PostBody = styled.section`
  ${tw`font-serif text-lg`};
  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  figure {
    margin-bottom: 1.5em;
  }
  blockquote {
    box-shadow: rgba(0, 0, 0, 0.84) 3px 0px 0px 0px inset;
    padding-left: 20px;
    margin-left: -20px;
    font-style: italic;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }: PageProps<Data, pageContext>) => {
  const post = data.markdownRemark
  const { blogTitle, blogSiteName, blogUrl } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <MetaAndStyles
      meta={{
        siteTitle: post.frontmatter.title,
        description: post.frontmatter.description || post.excerpt,
        siteName: blogSiteName,
        siteUrl: blogUrl,
        // TODO add cover image to each blogpost for page image here
      }}
    >
      <BlogLayout location={location} title={blogTitle}>
        <article>
          <header>
            <h1 style={tw`text-4xl`}>{post.frontmatter.title}</h1>
            <p style={tw`mb-4`}>{post.frontmatter.date}</p>
          </header>
          <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{ ...tw`border-solid my-4`, borderWidth: 0.5 }} />
          <footer>
            <Bio justify="left" />
            {post.frontmatter.mediumLink && (
              <p>
                Looking to comment? Visit the
                <OutboundLink href={post.frontmatter.mediumLink}> medium post </OutboundLink>(comments may come here
                eventually).
              </p>
            )}
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
      </BlogLayout>
    </MetaAndStyles>
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
        mediumLink
      }
    }
  }
`
