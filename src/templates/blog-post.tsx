import { graphql, PageProps, Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Bio from 'components/Bio'
import BlogLayout from 'components/BlogLayout'
import MetaAndStyles from 'components/MetaAndStyles'
import { BlogPostBySlugQuery } from 'types/graphqlTypes'

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
  ${tw`text-lg`};
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

const BlogPostTemplate: React.FC<PageProps<BlogPostBySlugQuery, pageContext>> = ({
  data,
  pageContext,
  location,
}: PageProps<BlogPostBySlugQuery, pageContext>) => {
  const post = data.markdownRemark
  const { blogSiteName } = data.site.siteMetadata
  const { previous, next } = pageContext
  // TODO look into these errors
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const thumbnailSrc = post.frontmatter.thumbnail?.childImageSharp.fixed.src
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const fullImgPath = thumbnailSrc && `${location.origin}${thumbnailSrc}`
  console.log(location)
  return (
    <MetaAndStyles
      meta={{
        pageTitle: post.frontmatter.title,
        description: post.excerpt,
        siteName: blogSiteName,
        siteUrl: location.href,
        img: fullImgPath,
      }}
    >
      <BlogLayout location={location} title={blogSiteName}>
        <article>
          <header>
            <h1 style={tw`text-4xl leading-none`}>{post.frontmatter.title}</h1>
            {post.frontmatter.description && (
              <h2 style={tw`text-xl leading-none my-2 text-gray-darkest`}>{post.frontmatter.description}</h2>
            )}
            <p style={tw`mb-4`}>{post.frontmatter.date}</p>
          </header>
          <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={tw`border-solid my-4 border-0.5`} />
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
                <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog/${next.fields.slug}`} rel="next">
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
        siteUrl
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
`
