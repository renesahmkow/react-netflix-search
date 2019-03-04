import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 50px;
  width: 100%;
  color: white;
`

export default function Navbar() {
  return (
    <StyledFooter>
      <nav>Home</nav>
    </StyledFooter>
  )
}
