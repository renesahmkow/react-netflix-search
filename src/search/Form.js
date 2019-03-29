import React from 'react'
import styled from 'styled-components'
import MovieFilter from './MovieFilter'

const SearchArea = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StylesForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  outline: none;
`

const StyledInput = styled.input`
  position: relative;
  border: 2px solid #9cb9af;
  padding: 5px;
  margin: 10px auto;
  outline: none;
`

export default function Form({ titleSearch, headerActive, onInputChange }) {
  return (
    <SearchArea
      data-cy="area"
      className={headerActive ? 'header__close' : 'header__active'}
    >
      <StylesForm data-cy="form">
        <StyledInput type="text" onChange={titleSearch} />
        <MovieFilter onInputChange={onInputChange} />
      </StylesForm>
    </SearchArea>
  )
}
