import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const StyledSelect = styled.select`
  display: block;
  background: white;
  width: 90%;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export default function MovieFilter({ genreSearch, ratingSearch }) {
  const [genres, setGenres] = useState([])

  function getMovieGenres() {
    const genreString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'

    Axios.get(genreString).then(res => {
      const { genres } = res.data
      setGenres(genres)
    })
  }

  useEffect(() => {
    getMovieGenres()
  }, [])

  return (
    <React.Fragment>
      <label htmlFor="genre">Genre</label>
      <StyledSelect
        onChange={genreSearch}
        value={genres.id}
        name="genre"
        id="genre"
      >
        <option value={''}>All</option>
        <optgroup label="Movies">
          {genres.map(genre => (
            <option value={`&with_genres=${genre.id}`} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </optgroup>
      </StyledSelect>
      <label htmlFor="rating">Rating</label>
      <StyledSelect
        onChange={ratingSearch}
        value={genres.id}
        name="genre"
        id="rating"
      >
        <option value={1}>All</option>
        <optgroup label="Rating">
          <option value="9">9 +</option>
          <option value="8">8 +</option>
          <option value="7">7 +</option>
          <option value="6">6 +</option>
          <option value="5">5 +</option>
          <option value="4">4 +</option>
          <option value="3">3 +</option>
          <option value="2">2 +</option>
          <option value="1">1 +</option>
        </optgroup>
      </StyledSelect>
    </React.Fragment>
  )
}
