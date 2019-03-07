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

export default function Search() {
  function titleSearch(event) {
    const searchString = `https://api.themoviedb.org/3/search/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&include_adult=false&query=${
      event.target.value
    }`
    console.log(searchString)
  }

  return (
    <StylesForm>
      <StyledInput type="text" onChange={titleSearch} name="target" />
    </StylesForm>
  )
}
