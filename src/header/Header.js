import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 50px;
  width: 100%;
  color: white;
`
const SearchDiv = styled.div`
  background-image: ;
`

export default function Header() {
  return (
    <StyledHeader>
      <h1 data-cy="header-title">Neflixsearch</h1>
      <div />
    </StyledHeader>
  )
}
