import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { WindowLocation } from '@reach/router'

declare let __PATH_PREFIX__: string

const Header = styled.h1`
  ${tw`mb-6 sm:text-7xl text-5xl`};
`

const PostHeader = styled.h1`
  ${tw`mb-6 text-3xl no-underline transition duration-500 ease-in-out text-black hover:text-orange`};
  & {
    transition: 0.2s;
  }
`

type Data<LocationState = WindowLocation['state']> = {
  location: WindowLocation<LocationState>
  title: string
  children: React.ReactNode
}

const Layout = ({ location, title, children }: Data) => {
  const rootPath = `${__PATH_PREFIX__}/blog`
  let header

  if (location.pathname === rootPath) {
    header = <Header>{title}</Header>
  } else {
    header = (
      <PostHeader>
        <Link to="/blog">{title}</Link>
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
