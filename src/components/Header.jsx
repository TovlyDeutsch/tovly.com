import tw from 'tailwind.macro'
import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Content from './Content'
import Description from './Description'
import Img from 'gatsby-image'

const Intro = styled(Content)`
  ${tw`pb-8 md:py-8 text-center xl:text-left`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl my-8`};
  span {
    ${tw`text-orange`};
  }
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center xl:justify-start my-8`};
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
  ${tw`bg-blue text-white sm:ml-0 sm:mr-4`};
`

const Twitter = styled(Button)`
  ${tw`bg-blue text-white`};
`

const Blog = styled(Button)`
  ${tw`bg-dBlue text-white`};
`

const Header = (props) => (
  <Intro>
    <Title>
      Tovly Deutsch
    </Title>
    <div style={{display: "flex", flexFlow: "wrap-reverse", justifyContent:"center", marginTop: -24}}>
    <div style={{marginTop:24}}>
    <Description>
      <p>
        I'm a senior studying CS and linguistics at Harvard. I'm interested in intersections of my interests like NLP and
         computational photgraphy. I'm working on improving readability assesment systems for my senior thesis, advised by
         {" "}<OutboundLink href="http://www.eecs.harvard.edu/shieber/">Stuart Shieber</OutboundLink> 
         {" "}and <OutboundLink href="https://jasbi.github.io/">Masoud Jasbi</OutboundLink>.

         In my spare time, I enjoy filmmaking and <OutboundLink href="https://medium.com/@tovly">blogging</OutboundLink>.
      </p>
    </Description>
    {/* <Image src="static/face_small.jpg"/> */}
    <Social>
      <GitHub role="button" href="https://github.com/TovlyDeutsch">
        Github
      </GitHub>
      <Twitter role="button" href="/TovlyDeutschResume.pdf">
        Resume
      </Twitter>
    </Social>
    </div>
    <Img fixed={props.faceFile.fixed} style={{margin: "auto", marginTop:24}}/>
    </div>
  </Intro>
)

export default Header
