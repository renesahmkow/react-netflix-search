import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  flex: 1 0 250px;
  background: gray;
  margin: 1rem;
  overflow: hidden;
  border-radius: 6px;
`

export default function RouletteCard({ title }) {
  return <StyledDiv>{title}</StyledDiv>
}
