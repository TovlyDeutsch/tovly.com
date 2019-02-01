import tw from 'tailwind.macro'
import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Content from './Content'
import Description from './Description'

const Intro = styled(Content)`
  ${tw`py-8 md:py-16`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl`};
  span {
    ${tw`text-orange`};
  }
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center sm:justify-start mt-8`};
`

const Button = styled(OutboundLink)`
  ${tw`cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`

const Homepage = styled(Button)`
  ${tw`bg-indigo text-white`};
`

const GitHub = styled(Button)`
  ${tw`bg-grey-dark text-white sm:ml-0 sm:mr-4 my-4 sm:my-0`};
`

const Twitter = styled(Button)`
  ${tw`bg-blue text-white`};
`

const Blog = styled(Button)`
  ${tw`bg-dBlue text-white`};
`

const Header = () => (
  <Intro>
    <Title>
      Tovly Deutsch
    </Title>
    <Description>
      <p>
        I'm Tovly, a software engineer, filmmaker, and
         junior at Harvard studying CS and linguistics.
      </p>
    </Description>
    <Social>
      <GitHub role="button" href="https://github.com/TovlyDeutsch">
        Github
      </GitHub>
      <GitHub role="button" href="/TovlyDeutschResume.pdf">
        Resume
      </GitHub>
      {/* <Blog role="button" href="https://twitter.com/lekoarts_de">
        Blog
      </Blog> */}
      {/* <Blog role="button" href="https://twitter.com/lekoarts_de">
        Youtube
      </Blog>  */}
    </Social>
  </Intro>
)

export default Header
