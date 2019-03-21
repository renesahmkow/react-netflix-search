import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const StyledSelect = styled.select`
  display: flex;
  background: white;
  width: 90%;
  height: 30px;
  border-radius: 10px;
  margin: 0 auto 10px auto;
`

export default function RouletteForm({ onInputChange }) {
  const [genres, setGenres] = useState([])

  async function getMovieGenres() {
    const genreString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'

    await Axios.get(genreString).then(res => {
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
        onChange={onInputChange}
        value={genres.id}
        name="genre"
        id="genre"
      >
        <option value={''}>All</option>
        <optgroup label="Movies">
          {genres.map(genre => (
            <option value={`with_genres=${genre.id}`} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </optgroup>
      </StyledSelect>

      <label htmlFor="rating">Rating</label>
      <StyledSelect onChange={onInputChange} name="rating" id="rating">
        <optgroup label="Rating">
          <option value="">All</option>
          <option value="vote_average.gte=9">9 +</option>
          <option value="vote_average.gte=8">8 +</option>
          <option value="vote_average.gte=7">7 +</option>
          <option value="vote_average.gte=6">6 +</option>
          <option value="vote_average.gte=5">5 +</option>
          <option value="vote_average.gte=4">4 +</option>
          <option value="vote_average.gte=3">3 +</option>
          <option value="vote_average.gte=2">2 +</option>
          <option value="vote_average.gte=1">1 +</option>
        </optgroup>
      </StyledSelect>
    </React.Fragment>
  )
}
