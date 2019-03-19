import React from 'react'
import Header from '../header/Header'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

export default function RoulettePage() {
  return (
    <Grid>
      <Header>
    </Grid>
  )
}
