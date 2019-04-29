import React from 'react'
import styled from 'styled-components'
import MovieFilter from './MovieFilter'

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-column: span 3;
  transition: all 0.7s ease;
`

const StylesForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  outline: none;
`

const StyledInput = styled.input`
  border: 2px solid #9cb9af;
  padding: 5px;
  margin: 10px auto;
  outline: none;
`

export default function Form({ titleSearch, headerActive, onInputChange }) {
  return (
    <SearchArea
      data-cy="area"
      className={headerActive ? 'header__active' : 'header__close'}
    >
      <StylesForm data-cy="form">
        <StyledInput type="text" onChange={titleSearch} />
        <MovieFilter onInputChange={onInputChange} />
      </StylesForm>
    </SearchArea>
  )
}
