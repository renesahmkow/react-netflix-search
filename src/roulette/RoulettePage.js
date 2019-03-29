import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import GlobalStyle from '../GlobalStyle'
import RouletteCard from './RouletteCard'
import { FaSlidersH } from 'react-icons/fa'
import * as _ from 'lodash'

const Grid = styled.section`
  display: grid;
  grid-template-rows: 3fr auto;
  background: #596f62;
  height: auto;
`
const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const GoButton = styled.button`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: solid 1px #123596;
  border-radius: 999px;
  background: #9cb9af;
  opacity: 1;
  margin: 0 auto;

  &:active {
    border: solid 1px #ffb400;
  }
`

const FitlerContainer = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StyledSelectRating = styled.select`
  position: absolute;
  left: -800px;
  bottom: 230px;
  width: 200px;
  height: 40px;
  margin-bottom: 5px;
  box-shadow: 0 0 2px;
  background: lightblue;
  justify-content: center;
  align-items: center;
`

const StyledSelectGenre = styled.select`
  position: absolute;
  left: -500px;
  bottom: 170px;
  width: 200px;
  height: 40px;
  margin-bottom: 5px;
  box-shadow: 0 0 2px;
  background: lightblue;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 10px;
  position: relative;
`

export default function RoulettePage() {
  const [genres, setGenres] = useState([])
  const [data, setData] = useState({})
  const [filteredMovies, setFilteredMovies] = useState([])
  const [filterActive, setFilterActive] = useState(true)

  function handleClick() {
    setFilterActive(!filterActive)
  }

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

    await Axios.get(filterString).then(res => {
      const { results } = res.data
      setFilteredMovies(_.sampleSize([...results], 5))
    })

    setFilterActive(true)
  }

  useEffect(() => {
    getMovieGenres()
  }, [])

  return (
    <Grid>
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
        <FitlerContainer>
          <StyledSelectGenre
            className={filterActive ? '' : 'filterActive'}
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
          </StyledSelectGenre>

          <StyledSelectRating
            className={filterActive ? '' : 'filterActive'}
            onChange={onInputChange}
            name="rating"
            id="rating"
          >
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
          </StyledSelectRating>
        </FitlerContainer>

        <StyledFilter onClick={handleClick}>
          <FaSlidersH style={{ width: 35, height: 35, color: 'white' }} />
        </StyledFilter>

        <GoButton onClick={getFilteredMovies}>GO!</GoButton>
      </StyledButtons>
      <GlobalStyle />
    </Grid>
  )
}
