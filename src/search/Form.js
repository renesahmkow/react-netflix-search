import React from 'react'
import styled from 'styled-components'
import MovieFilter from './MovieFilter'

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`

const StylesForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
`

const StyledInput = styled.input`
  border: 2px solid black;
  padding: 5px;
  margin: 10px auto;
`

export default function Form({
  titleSearch,
  headerActive,
  value,
  ratingSearch,
  genreSearch,
}) {
  return (
    <SearchArea
      data-cy="area"
      style={headerActive ? { height: 0, display: 'none' } : null}
    >
      <StylesForm data-cy="form">
        <StyledInput
          type="text"
          onChange={titleSearch}
          name="target"
          value={value}
        />
        <MovieFilter genreSearch={genreSearch} ratingSearch={ratingSearch} />
      </StylesForm>
    </SearchArea>
  )
}
