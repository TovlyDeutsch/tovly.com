import tw from 'tailwind.macro'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Description from './Description'

const Intro = styled.section`
  ${tw`sm:px-8 px-4 md:px-24 pb-8 md:py-8 text-center xl:text-left`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl my-8`};
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center xl:justify-start my-8`};
`

const genButton = component => styled(component)`
  ${tw`cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`
const OutboundButton = genButton(OutboundLink)
const Button = genButton(Link)

// TODO see if I can merge these into one button with flexbox
const GitHub = styled(OutboundButton)`
  ${tw`bg-blue-dark text-white sm:ml-0 sm:mr-4 my-1`};
`

const LastButton = styled(Button)`
  ${tw`bg-blue-dark text-white`};
`

const Header = ({ faceFile }) => (
  <Intro>
    <Title>Tovly Deutsch</Title>
    <div style={{ display: 'flex', flexFlow: 'wrap-reverse', justifyContent: 'center', marginTop: -24 }}>
      <div style={{ marginTop: 24 }}>
        <Description>
          <p>
            I'm a senior studying CS and linguistics at Harvard, interested in NLP and ML. I completed a
            <a href="/Senior_Thesis_Final_Tovly_Deutsch.pdf"> senior thesis </a>
            focused on improving readability assessment systems, advised by
            <OutboundLink href="http://www.eecs.harvard.edu/shieber/"> Stuart Shieber</OutboundLink> and
            <OutboundLink href="https://jasbi.github.io/"> Masoud Jasbi</OutboundLink>. In my spare time, I enjoy
            <OutboundLink href="https://www.youtube.com/channel/UCoYCQPyiv_y4QAHinPOFGHA"> filmmaking</OutboundLink> and
            <Link to="/blog"> blogging</Link>.
          </p>
        </Description>
        <Social>
          <GitHub role="button" href="/#publications">
            Publications
          </GitHub>
          <GitHub role="button" href="/#projects">
            Projects
          </GitHub>
          <GitHub role="button" href="https://github.com/TovlyDeutsch">
            Github
          </GitHub>
          <GitHub role="button" href="/TovlyDeutschResume.pdf">
            Resume
          </GitHub>
          <LastButton role="button" to="/blog">
            Blog
          </LastButton>
        </Social>
      </div>
      <Img fixed={faceFile.fixed} style={{ margin: 'auto', marginTop: 24 }} />
    </div>
  </Intro>
)

Header.propTypes = {
  faceFile: PropTypes.object.isRequired,
}

export default Header
