import React from 'react'
import styled from 'styled-components'
import RouletteForm from './RouletteForm'
import RouletteCard from './RouletteCard'
import { FaSlidersH } from 'react-icons/fa'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  background: white;
`

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  top: 70px;
  background: steelblue;
  opacity: 0.5;
  height: 400px;
  width: 100%;
`

const FilterButton = styled.button`
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 50px;
  background: lightblue;
  justify-content: center;
`

const StyledButton = styled.button`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 2px;
`

const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
  overflow-x: auto;
  position: relative;
`

export default function RoulettePage({ titleSearch, filterMovies, movies }) {
  return (
    <Grid>
      <FilterButton>
        <FaSlidersH style={{ width: 25, height: 25 }} />
      </FilterButton>

      <CardContainer>
        <RouletteCard />
        <RouletteCard />
        <RouletteCard />
        <RouletteCard />
        <RouletteCard />
      </CardContainer>

      <StyledButton>GO!</StyledButton>
    </Grid>
  )
}
