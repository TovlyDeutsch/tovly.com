import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { WindowLocation } from '@reach/router'

declare let __PATH_PREFIX__: string

const Header = styled.h1`
  ${tw`sm:text-7xl text-4.75xl`};
`

const PostHeader = styled.h1`
  ${tw`text-3xl mb-8`};
`

const PostHeaderLink = styled(Link)`
  ${tw`text-black`};
`

const BlogPage = styled.div`
  ${tw`mx-auto max-w-3xl py-6 px-6 font-serif`};
  a {
    ${tw`hover:text-orange`};
  }
`
const BlogMain = styled.main`
  a {
    ${tw`text-blue`};
  }
  .footnotes p {
    display: inline;
  }
  .footnotes li {
    ${tw`my-2`};
  }
`

type Data<LocationState = WindowLocation['state']> = {
  location: WindowLocation<LocationState>
  title: string
  children: React.ReactNode
}

const BlogLayout: React.FC<Data> = ({ location, title, children }: Data) => {
  const rootPath = `${__PATH_PREFIX__}/blog`
  let header

  if (location.pathname === rootPath || location.pathname === rootPath + '/') {
    header = <Header>{title}</Header>
  } else {
    header = (
      <PostHeader>
        <PostHeaderLink to="/blog">{title}</PostHeaderLink>
      </PostHeader>
    )
  }
  return (
    <BlogPage>
      <header style={tw`text-center`}>{header}</header>
      <BlogMain>{children}</BlogMain>
    </BlogPage>
  )
}

export default BlogLayout
