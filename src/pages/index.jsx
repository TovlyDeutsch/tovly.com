/* eslint no-shadow: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import tw from 'tailwind.macro'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import '../../static/rgbSpinner.css'

import Header from '../components/Header'

import favicon from '../favicon.png'
import rightArrow from '../right-arrow.svg'
import github from '../github.svg'

const GlobalStyles = createGlobalStyle`
  .wf-loading body, body {
    visibility: hidden;
  }
  .wf-active body, .wf-inactive body {
    visibility: visible;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  html {
    border: 0;
    margin: 0;
    font-size: 18px;
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: #002034;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23909cbd' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }
  select {
    appearance: none;
    border:none;
    font-size: 1rem;
    width: 100%;
    color: white;
    padding: .75rem 1rem;
    border-radius: .25rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'%3E%3Cpolygon points='0,0 100,0 50,50'/%3E%3C/svg%3E") #7886d7 no-repeat 98% 77%;
    background-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
    &:focus {
      outline: 0px;
      box-shadow: 0 0 0 3px rgba(101,116,205,.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
  select::-ms-expand {
    display:none;
  }
  select option {
    background: #6574cd;
    font-size: 1rem;
  }
  a {
    cursor: pointer;
  }
`

const Page = styled.div`
  ${tw`text-white font-sans antialiased leading-normal relative`};
`

const SliderWrapper = styled.section`
  ${tw`sm:px-8 px-4 md:px-24`};
`

const Footer = styled.footer`
  ${tw`text-center pb-6 pt-12 text-xs text-grey-light tracking-wide z-50 uppercase`};
  a {
    ${tw`text-orange hover:text-orange-light no-underline`};
  }
`

const Item = styled.div`
  ${tw`bg-black rounded-lg shadow-lg flex`};
  height: 525px;
  @media (max-width: 500px) {
    height: 450px;
  }
`

const ItemContent = styled.div`
  ${tw`py-8 px-6 flex flex-wrap content-between relative`};
`

const Top = styled.div`
  ${tw`z-30 flex flex-col`};
`

const Bottom = styled.div`
  ${tw`z-30`};
`

const Preview = styled.div`
  ${tw`text-white inline-block text-xl relative mb-0 py-1 tracking-wide no-underline uppercase`};
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  .project-box:hover & {
    img {
      transform: translateX(10px);
    }
  }
`

const Repo = styled.div`
  ${tw`text-white text-sm inline-block mb-4 py-1 tracking-wide no-underline opacity-75`};
  transition: all 0.4s ease-in-out;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    transition: transform 0.3s ease-in-out;
  }
  .project-box:hover & {
    ${tw`opacity-100`};
  }
`

const Desc = styled.div`
  ${tw`text-sm text-white opacity-75`};
`

const BGImage = styled.div`
  ${tw`absolute pin rounded-lg`};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw`rounded-lg`};
    filter: brightness(0.5);
    transition: filter 1s linear;
  }
  img:hover {
    filter: brightness(0);
  }
`

const ItemTitle = styled.h2`
  ${tw`text-white text-3xl mb-4`};
`

const Gradient = styled.div`
  ${tw`absolute pin rounded-lg z-20`};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`

const Heading = styled.h2`
  ${tw`text-center xl:text-left text-2xl md:text-4xl m-0 font-semibold`};
`

const Grid = styled.div`
  ${tw`py-8`};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
`

const PubLink = styled.a`
  ${tw`no-underline text-orange hover:text-orange-light`};
`

const PubList = styled.ul`
  padding-inline-start: 1.3em;
  a {
    ${tw`text-orange hover:text-orange-light no-underline`};
  }
`

const Index = props => {
  const {
    data: {
      allSitesYaml: { edges },
      site: { siteMetadata },
      file: { childImageSharp },
    },
  } = props

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.siteTitle}</title>
        <meta name="description" content="Portfolio for Tovly Deutsch, software engineer and Harvard student" />
        <meta name="image" content={favicon} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="tovly.com" />
        <meta property="og:url" content="https://tovly.com" />
        <meta property="og:title" content="Software Engineer & Harvard Student" />
        <meta property="og:description" content="Portfolio for Tovly Deutsch, software engineer and Harvard student" />
        <meta property="og:image" content={favicon} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@_tovly" />
        <meta name="twitter:title" content="Software Engineer & Harvard Student" />
        <meta name="twitter:description" content="Portfolio for Tovly Deutsch, software engineer and Harvard student" />
        <meta name="twitter:image" content={favicon} />
      </Helmet>
      <Page>
        <Header faceFile={childImageSharp} />
        <SliderWrapper>
          <a name="publications">
            <Heading>Publications</Heading>
          </a>
          <PubList>
            <li>
              <b>T. Deutsch</b>
              <br />
              <b>Linguistic Features for Readability Assessment</b>
              <br /> <i>Senior Thesis</i>
              <br />
              <PubLink href="/thesis_bibtex.txt">[BibTeX]</PubLink>
              <PubLink href="/Senior_Thesis_Final_Tovly_Deutsch.pdf"> [PDF] </PubLink>
              <OutboundLink href="https://github.com/TovlyDeutsch/Linguistic-Features-for-Readability">
                [Code]
              </OutboundLink>
            </li>
            <li>
              <b>T. Deutsch</b>, M. Jasbi, S. Shieber
              <br />
              <b>Linguistic Features for Readability Assessment</b>
              <br />{' '}
              <i>
                [To appear in] Proceedings of the Fifteenth Workshop on Innovative Use of NLP for Building Educational
                Applications
              </i>
              <br />
              <PubLink href="/ling_bea_bibtex.txt">[BibTeX]</PubLink>
              <a href="https://arxiv.org/abs/2006.00377"> [Paper] </a>
              <a href="https://github.com/TovlyDeutsch/Linguistic-Features-for-Readability">[Code]</a>
            </li>
            <li>
              A. Saleh, <b>T. Deutsch</b>
              <sup>*</sup>, S. Casper<sup>*</sup>, Y. Belinkov, S. Shieber
              <br />
              <b>Probing Neural Dialog Models for Conversational Understanding</b>
              <br /> <i>[To appear in] Proceedings of the Second Workshop on NLP for Conversational AI</i>
              <br /> <i>Links coming soon (once published)!</i>
              {/* TODO add links once published */}
              {/* <br /> <a href="https://abdulsaleh.github.io/_pages/bibtex/saleh2019team.html">[BibTeX]</a>{' '} */}
              {/* <a href="https://arxiv.org/pdf/1904.03513.pdf">[PDF]</a>{' '}
              <a href="https://github.com/AbdulSaleh/QCRI-MIT-SemEval2019-Task4">[Code]</a> */}
            </li>
          </PubList>
          <a name="projects">
            <Heading>Projects</Heading>
          </a>
          <Grid>
            {edges.map(site => {
              const { id, title, description, cover, url, siteName } = site.node
              return (
                <a href={url} style={{ textDecoration: 'none' }} className="project-box" key={id}>
                  <Item>
                    <ItemContent>
                      <Top>
                        <Preview>
                          View on <img src={rightArrow} alt="Arrow" aria-hidden="true" />
                        </Preview>
                        <Repo>
                          {siteName.includes('GitHub') && <img src={github} alt="Arrow" aria-hidden="true" />}{' '}
                          {siteName}
                        </Repo>
                        <Desc>{description}</Desc>
                      </Top>
                      <Bottom>
                        <ItemTitle>{title}</ItemTitle>
                      </Bottom>
                      <BGImage>
                        <Gradient />
                        {title === 'RGB Loader Animation' && (
                          <div className="demo-3">
                            <ul className="bokeh">
                              <li />
                              <li />
                              <li />
                            </ul>
                          </div>
                        )}
                        {cover && title !== 'RGB Loader Animation' && (
                          <Img fluid={cover.childImageSharp.fluid} imgStyle={{ objectFit: 'cover' }} />
                        )}
                      </BGImage>
                    </ItemContent>
                  </Item>
                </a>
              )
            })}
          </Grid>
        </SliderWrapper>
        <Footer>
          <OutboundLink href="https://github.com/TovlyDeutsch/tovly.com">Design</OutboundLink> by Tovly Deutsch. Forked
          from <OutboundLink href="https://github.com/LeKoArts/gatsby-starter-portfolio"> Lekoarts</OutboundLink>.
        </Footer>
      </Page>
      <GlobalStyles />
    </React.Fragment>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allSitesYaml: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }),
    file: GatsbyImageProps,
  }).isRequired,
}

export const overviewQuery = graphql`
  query OverviewQuery {
    file(relativePath: { eq: "face.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 267) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allSitesYaml {
      edges {
        node {
          id
          title
          url
          description
          siteName
          cover {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`
