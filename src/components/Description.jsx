import tw from 'tailwind.macro'
import styled from 'styled-components'

const Description = styled.div`
  ${tw`text-sm sm:text-base md:text-lg max-w-md text-grey-lighter`};
  ${props => props.long && 'max-width: 60rem'};
`

export default Description
