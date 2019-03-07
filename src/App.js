import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './cards/Card'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Axios from 'axios'

const Grid = styled.section`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
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

  function getMovies() {
    const urlString =
      'https://api.themoviedb.org/3/trending/movie/week?api_key=6dd2696164ca6e927402920dedc2e294'

    Axios.get(urlString).then(res => {
      const { results } = res.data
      setMovies(results)
    })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Grid>
      <Header />
      <PageGrid>
        {movies.map(movie => (
          <Card
            {...movie}
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
