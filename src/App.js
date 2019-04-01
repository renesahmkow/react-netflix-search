import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MoviePage from './cards/MoviePage'
import RoulettePage from './roulette/RoulettePage'
import Axios from 'axios'
import { saveMoviesToStorage, getFavoriteMoviesFromStorage } from './services'
import { GiAbstract103 } from 'react-icons/gi'
import { FaHome, FaTv } from 'react-icons/fa'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  grid-gap: 10px;
  height: 100vh;
  background: #596f62;
`

const StyledNavbar = styled.nav`
  display: grid;
  position: fixed;
  bottom: 0;
  grid-auto-flow: column;
  grid-gap: 2px;
  height: 50px;
  width: 100%;
  background: #596f62;
  color: white;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background: #1c3144;

  &.active {
    background: #ceb992;
  }
`

export default function App() {
  const [movies, setMovies] = useState([])
  const [favoritesMovies, setFavoritesMovies] = useState(
    getFavoriteMoviesFromStorage()
  )

  useEffect(() => {
    getTrendingMovies()
  }, [])

  useEffect(() => {
    saveMoviesToStorage(favoritesMovies)
  }, [favoritesMovies])

  function getTrendingMovies() {
    const urlString =
      'https://api.themoviedb.org/3/trending/movie/week?api_key=6dd2696164ca6e927402920dedc2e294'

    Axios.get(urlString).then(res => {
      const { results } = res.data

      const films = results.map(movie => ({
        ...movie,
        isInFavorites: favoritesMovies.some(fv => fv.id === movie.id),
      }))

      setMovies(films)
    })
  }

  function addFavoritesMovies(movie) {
    if (favoritesMovies.some(favMovie => favMovie.id === movie.id)) {
      const index = favoritesMovies.indexOf(movie)
      setFavoritesMovies([
        ...favoritesMovies.splice(0, index),
        ...favoritesMovies.splice(index + 1),
      ])
      saveMoviesToStorage(favoritesMovies)
    } else {
      const index = movies.indexOf(movie)
      setFavoritesMovies([
        ...favoritesMovies,
        {
          ...movies[index],
          isBookmarked: true,
        },
      ])
      saveMoviesToStorage(favoritesMovies)
    }
  }

  function titleSearch(event) {
    const searchString = `https://api.themoviedb.org/3/search/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&include_adult=false&page=1&query=${
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

  async function filterMovies(data, count) {
    const filterString = `https://api.themoviedb.org/3/discover/movie?api_key=6dd2696164ca6e927402920dedc2e294&language=de&${
      data.sort
    }&include_adult=true&page=1&include_video=false&${data.rating}&${
      data.genre
    }&page=${count}&`
    await Axios.get(filterString).then(res => {
      const { results } = res.data

      setMovies(results)
    })
  }

  return (
    <Router>
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <MoviePage
              movies={movies}
              titleSearch={titleSearch}
              filterMovies={filterMovies}
              favoritesMovies={favoritesMovies}
              addFavoritesMovies={addFavoritesMovies}
            />
          )}
        />
        <Route
          path="/favorites"
          render={() => (
            <MoviePage
              movies={favoritesMovies}
              titleSearch={titleSearch}
              filterMovies={filterMovies}
              addFavoritesMovies={addFavoritesMovies}
            />
          )}
        />
        <Route
          path="/roulette"
          render={() => (
            <RoulettePage
              movies={movies}
              titleSearch={titleSearch}
              filterMovies={filterMovies}
              addFavoritesMovies={addFavoritesMovies}
            />
          )}
        />
        <StyledNavbar>
          <StyledLink exact to="/">
            <FaHome style={{ width: 25, height: 25 }} />
          </StyledLink>
          <StyledLink to="/favorites">
            <FaTv style={{ width: 25, height: 25 }} />
          </StyledLink>
          <StyledLink to="/roulette">
            <GiAbstract103 style={{ width: 25, height: 25 }} />
          </StyledLink>
        </StyledNavbar>
      </Grid>
    </Router>
  )
}
