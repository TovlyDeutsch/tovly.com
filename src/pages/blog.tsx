import { PageProps, Link, graphql } from 'gatsby'
import React from 'react'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import BlogLayout from '../components/BlogLayout'
import MetaAndStyles from '../components/MetaAndStyles'
import { BlogPageQueryQuery } from '../types/graphqlTypes'

const BlogIndex: React.FC<BlogPageQueryQuery> = ({ data, location }: PageProps<BlogPageQueryQuery>) => {
  const { blogTitle, blogSiteName, blogUrl, metaFaceImg } = data.site.siteMetadata
  let posts = data.allMarkdownRemark.edges
  if (process?.env?.NODE_ENV != 'development') {
    posts = posts.filter(post => post.node.frontmatter.status !== 'draft')
  }
  return (
    <MetaAndStyles
      meta={{
        pageTitle: blogTitle,
        description: `All posts on ${blogTitle}`,
        siteName: blogSiteName,
        siteUrl: blogUrl,
        img: metaFaceImg,
      }}
    >
      <BlogLayout location={location} title={blogTitle}>
        <Bio />
        <div style={tw`mt-8`}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} style={tw`mb-4`}>
                <header>
                  <h3 style={tw`text-3xl leading-tight`}>
                    <Link to={node.fields.slug}>{title}</Link>
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
        </div>
      </BlogLayout>
    </MetaAndStyles>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery {
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
            status
          }
        }
      }
    }
  }
`
