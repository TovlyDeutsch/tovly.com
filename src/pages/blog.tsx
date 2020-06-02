// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'

import Bio from '../components/Bio'
import BlogLayout from '../components/BlogLayout'
import Meta from '../components/Meta'
import MetaAndStyles from '../components/MetaAndStyles'

type Data = {
  site: {
    siteMetadata: {
      blogTitle: string
      blogSiteName: string
      blogUrl: string
      metaFaceImg: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

export const BlueHoverLink = styled(Link)`
  ${tw`no-underline transition duration-500 ease-in-out text-blue hover:text-orange`};
  & {
    transition: 0.2s;
  }
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const { blogTitle, blogSiteName, blogUrl, metaFaceImg } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges

  return (
    <MetaAndStyles
      meta={{
        siteTitle: blogTitle,
        description: `All posts on ${blogTitle}`,
        siteName: blogSiteName,
        siteUrl: blogUrl,
        img: metaFaceImg,
      }}
    >
      <BlogLayout location={location} title={blogTitle}>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} style={tw`mb-2`}>
              <header>
                <h3 style={tw`text-3xl`}>
                  <BlueHoverLink to={node.fields.slug}>{title}</BlueHoverLink>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </BlogLayout>
    </MetaAndStyles>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
        blogSiteName
        blogUrl
        metaFaceImg
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
