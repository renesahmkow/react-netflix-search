import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './cards/Card'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Axios from 'axios'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr 48px;
  grid-gap: 10px;
  height: 100vh;
`
const PageGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  overflow: scroll;
`

export default function App() {
  const [movies, setMovies] = useState([])

  function getTrendingMovies() {
    const urlString =
      'https://api.themoviedb.org/3/trending/movie/week?api_key=6dd2696164ca6e927402920dedc2e294'

    Axios.get(urlString).then(res => {
      const { results } = res.data
      setMovies(results)
    })
  }

  function titleSearch(event) {
    const searchString = `https://api.themoviedb.org/3/search/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&include_adult=false&query=${
      event.target.value
    }`

    if (event.target.value === '') {
      getTrendingMovies()
    } else {
      Axios.get(searchString).then(res => {
        const { results } = res.data
        setMovies(results)
      })
    }
  }

  async function filterMovies(data) {
    const filterString = `https://api.themoviedb.org/3/discover/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&${
      data.rating
    }&${data.genre}`
    console.log(data)

    await Axios.get(filterString).then(res => {
      const { results } = res.data
      setMovies(results)
    })
  }

  useEffect(() => {
    getTrendingMovies()
  }, [])

  return (
    <Grid>
      <Header titleSearch={titleSearch} filterMovies={filterMovies} />
      <PageGrid>
        {movies.map(movie => (
          <Card
            {...movie}
            rating={movie.vote_average}
            overview={movie.overview}
            title={movie.title}
            src={movie.poster_path}
            key={movie.id}
          />
        ))}
      </PageGrid>
      <Navbar />
    </Grid>
  )
}
