import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import RouletteCard from './RouletteCard'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  background: #607d8b;
  height: auto;
`
const FitlerContainer = styled.form`
  display: flex;
  flex-direction: row;
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledSelect = styled.select`
  display: flex;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 2px;
  background: lightblue;
  justify-content: center;
  align-items: center;
`

const GoButton = styled.button`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 2px;
`

const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
  overflow-x: auto;
  position: relative;
`

export default function RoulettePage() {
  const [genres, setGenres] = useState([])
  const [data, setData] = useState({})
  const [filteredMovies, setFilteredMovies] = useState([])

  console.log(filteredMovies)

  async function getMovieGenres() {
    const genreString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'
    await Axios.get(genreString).then(res => {
      const { genres } = res.data
      setGenres(genres)
    })
  }

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  async function getFilteredMovies(data) {
    const filterString = `https://api.themoviedb.org/3/discover/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&include_adult=true&page=1&include_video=false&${
      data.rating
    }&${data.genre}`
    const newArray = []
    for (let i = 0; i < 5; i++) {
      await Axios.get(filterString).then(res => {
        const { results } = res.data
        const index = Math.floor(Math.random() * results.length)

        if (newArray.some(movie => movie.id === results[index].id)) {
          newArray.slice(0, index)
        } else {
          newArray.push(results[index])
        }
      })
    }
    setFilteredMovies(newArray)
  }

  useEffect(() => {
    getMovieGenres()
  }, [])

  return (
    <Grid>
      <FitlerContainer>
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
      </FitlerContainer>

      <CardContainer>
        {filteredMovies.map(movie => (
          <RouletteCard
            {...movie}
            rating={movie.vote_average}
            overview={movie.overview}
            title={movie.title}
            src={movie.poster_path}
            key={movie.id}
          />
        ))}
      </CardContainer>

      <StyledButtons>
        <GoButton onClick={getFilteredMovies}>GO!</GoButton>
      </StyledButtons>
    </Grid>
  )
}
