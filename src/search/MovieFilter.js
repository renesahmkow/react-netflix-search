import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const StyledSelect = styled.select`
  background: darkgray;
`

export default function MovieFilter() {
  const [genres, setGenres] = useState([])

  function getMovieGenres() {
    const urlString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'

    Axios.get(urlString).then(res => {
      const { genres } = res.data
      setGenres(genres)
    })
  }

  useEffect(() => {
    getMovieGenres()
  }, [])

  return (
    <StyledSelect name="" id="">
      <option value="">All</option>
      <optgroup label="Movies">
        {genres.map(genre => (
          <option value={genre.id}>{genre.name}</option>
        ))}
      </optgroup>
    </StyledSelect>
  )
}
