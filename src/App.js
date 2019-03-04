import React from 'react'
import Header from './header/Header'
import styled from 'styled-components'

const BodyGrid = styled.section`
  display: grid;
  grid-auto-rows: 48px 1fr;
`

export default function App() {
  return (
    <BodyGrid>
      <Header />
    </BodyGrid>
  )
}
