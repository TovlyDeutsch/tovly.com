// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// type Data = {
//   site: {
//     siteMetadata: {
//       siteTitle: string
//     }
//   }
//   allMarkdownRemark: {
//     edges: {
//       node: {
//         excerpt: string
//         frontmatter: {
//           title: string
//           date: string
//           description: string
//         }
//         fields: {
//           slug: string
//         }
//       }
//     }[]
//   }
// }

const PostTitle = styled(Link)`
  ${tw`no-underline transition duration-500 ease-in-out text-blue hover:text-orange`};
  & {
    transition: 0.2s;
  }
`

const BlogIndex = ({ data, location }) => {
  const blogTitle = data.site.siteMetadata.blogTitle
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={blogTitle}>
      <SEO title="All posts" />
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <Bio />
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={tw`font-sans`}>
            <header>
              <h3 style={tw`mb-1 text-3xl`}>
                <PostTitle to={node.fields.slug}>{title}</PostTitle>
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
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
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
