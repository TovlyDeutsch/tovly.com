import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Header = styled.h1`
  ${tw`mb-6 sm:text-7xl text-5xl font-sans`};
`

const PostHeader = styled.h1`
  ${tw`mb-6 text-3xl font-sans`};
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blog`
  let header

  if (location.pathname === rootPath) {
    header = <Header>{title}</Header>
  } else {
    header = (
      <PostHeader>
        <Link style={tw`no-underline text-black`} to="/blog">
          {title}
        </Link>
      </PostHeader>
    )
  }
  return (
    <div style={tw`mx-auto max-w-lg py-6 px-6`}>
      <header style={tw`text-center`}>{header}</header>
      <main>{children}</main>
      <footer>{/* © {new Date().getFullYear()} */}</footer>
    </div>
  )
}

export default Layout
