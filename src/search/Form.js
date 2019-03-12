import React from 'react'
import styled from 'styled-components'
import MovieFilter from './MovieFilter'

const SearchArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`

const StylesForm = styled.form`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`

const StyledInput = styled.input`
  border: 2px solid black;
  margin: 0 auto;
  padding: 5px;
`

export default function Form({ titleSearch, headerActive, value }) {
  return (
    <SearchArea data-cy="area" style={headerActive ? { height: 0 } : null}>
      <StylesForm data-cy="form">
        <StyledInput
          type="text"
          onChange={titleSearch.titleSearch}
          name="target"
          value={value}
        />
        <MovieFilter />
      </StylesForm>
    </SearchArea>
  )
}
