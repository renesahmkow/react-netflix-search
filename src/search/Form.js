import React from 'react'
import styled from 'styled-components'

const SearchArea = styled.div`
  display: flex;
  width: 100%;
`

const StylesForm = styled.form`
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`

const StyledInput = styled.input`
  border: 2px solid black;
  margin: 0 auto;
  padding: 5px;
`

export default function Form({ titleSearch, headerActive, value }) {
  return (
    <SearchArea data-cy="area">
      <StylesForm data-cy="form" style={headerActive ? { height: 0 } : null}>
        <StyledInput
          type="text"
          onChange={titleSearch.titleSearch}
          name="target"
          value={value}
        />
      </StylesForm>
    </SearchArea>
  )
}
