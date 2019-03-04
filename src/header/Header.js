import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>Neflixsearch</h1>
    </StyledHeader>
  )
}
