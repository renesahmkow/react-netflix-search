import React from 'react'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Card from './cards/Card'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-auto-rows: 48px auto 48px;
  grid-gap: 10px;
  height: 100vh;
`

export default function App() {
  return (
    <Grid>
      <Header />
      <Card />
      <Navbar />
    </Grid>
  )
}
