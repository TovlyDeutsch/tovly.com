import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Meta, { MetaData } from './Meta'
import tw from 'tailwind.macro'

const stripedBodyStyle = `body {
    background-color: #002034;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23909cbd' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    color: white;
  }`

const GlobalStyle = createGlobalStyle`
  ${(props: { striped: boolean }) => (props.striped ? stripedBodyStyle : '')}

  html {
    font-size: 18px;
    ${tw`font-sans`}
  }
  
  ::selection {
    color: white;
    background-color: #f6993f;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ul {
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  a {
    ${tw`no-underline text-orange hover:text-orange-light`};
  }

  a[name], a[name]:hover, a[role]:hover {
    color: inherit
  }

  figcaption {
    ${tw`text-xs text-grey-darker italic`};
    max-width: 70%;
    margin: 0.5rem auto 0.5rem auto;
    text-align: center;
  }
`

type Data = {
  meta: MetaData
  background?: string
  children: React.ReactNode
}

const MetaAndStyles = ({ meta, background = null, children }: Data) => {
  const { siteTitle, description, siteName, siteUrl, img } = meta
  return (
    <React.Fragment>
      <Meta title={siteTitle} description={description} siteName={siteName} siteUrl={siteUrl} pageImage={img} />
      {children}
      <GlobalStyle striped={background === 'striped'} />
    </React.Fragment>
  )
}

export default MetaAndStyles
