import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Intro = styled.section`
  ${tw`sm:px-8 px-4 md:px-24 pb-8 md:py-8 text-center xl:text-left`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl my-8`};
`

interface LengthProps {
  readonly long?: boolean
}

const Description = styled.div<LengthProps>`
  ${tw`text-sm sm:text-base md:text-lg max-w-2xl text-gray-lighter`};
  ${props => props.long && 'max-width: 60rem'};
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center xl:justify-start my-8`};
`

const genButton = component => styled(component)`
  ${tw`text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full shadow-md focus:outline-none focus:shadow-outline`};
  ${tw`bg-blue-dark text-white sm:ml-0 sm:mr-4 my-1`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`
const OutboundButton = genButton(OutboundLink)
const Button = genButton(Link)

type HeaderProps = {
  faceFile: {
    fixed?: FixedObject
  }
}

const Header: React.FC<HeaderProps> = ({ faceFile }: HeaderProps) => (
  <Intro>
    <Title>Tovly Deutsch</Title>
    <div style={{ display: 'flex', flexFlow: 'wrap-reverse', justifyContent: 'center', marginTop: -24 }}>
      <div style={{ marginTop: 24 }}>
        <Description>
          <p>
            I'm a SWE at Meta working on VR in Reality Labs. I previously worked on Portal (a video calling device). In
            2020, I graduated from Harvard with a concentration in CS and linguistics. I researched ML and NLP in
            college and completed a<a href="/Senior_Thesis_Final_Tovly_Deutsch.pdf"> senior thesis </a>
            focused on improving readability assessment systems, advised by
            <OutboundLink href="http://www.eecs.harvard.edu/shieber/"> Stuart Shieber</OutboundLink> and
            <OutboundLink href="https://jasbi.github.io/"> Masoud Jasbi</OutboundLink>. In my spare time, I enjoy
            <OutboundLink href="https://www.youtube.com/channel/UCoYCQPyiv_y4QAHinPOFGHA"> filmmaking</OutboundLink> and
            <Link to="/blog"> blogging</Link>.<br></br> Email: tovly at this domain
          </p>
        </Description>
        <Social>
          <OutboundButton role="button" href="/#publications">
            Publications
          </OutboundButton>
          <OutboundButton role="button" href="/TovlyDeutschResume.pdf">
            Resume
          </OutboundButton>
          <OutboundButton role="button" href="https://github.com/TovlyDeutsch">
            Github
          </OutboundButton>
          <OutboundButton role="button" href="/#projects">
            Projects
          </OutboundButton>
          <Button role="button" to="/blog">
            Blog
          </Button>
          <OutboundButton role="button" href="https://www.youtube.com/channel/UCoYCQPyiv_y4QAHinPOFGHA">
            Youtube
          </OutboundButton>
        </Social>
      </div>
      <Img fixed={faceFile.fixed} style={{ margin: 'auto', marginTop: 24 }} />
    </div>
  </Intro>
)

export default Header
