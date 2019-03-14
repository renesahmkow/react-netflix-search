import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import MoviePage from './cards/MoviePage'

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  grid-gap: 10px;
  height: 100vh;
`

const StyledNavbar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  height: 50px;
  width: 100%;
  background: black;
  color: white;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
`

export default function App() {
  return (
    <Router>
      <Grid>
        <Route exact path="/" render={() => <MoviePage />} />
        <Route exact path="/favorites" render={() => <MoviePage />} />
        <StyledNavbar>
          <StyledLink exact to="/">
            Home
          </StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </StyledNavbar>
      </Grid>
    </Router>
  )
}
