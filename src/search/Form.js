import React from 'react'
import styled from 'styled-components'

const StylesForm = styled.form`
  margin: 0 auto;
`

const StyledInput = styled.input`
  border: 2px solid black;
  margin: 0 auto;
  padding: 5px;
`

export default function Form({ titleSearch, value }) {
  return (
    <StylesForm>
      <StyledInput
        type="text"
        onChange={titleSearch}
        name="target"
        value={value}
      />
    </StylesForm>
  )
}
