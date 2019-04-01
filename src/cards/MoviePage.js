import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import Header from '../header/Header'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: auto;
  overflow: scroll;
`

const MovieContainer = styled.div`
  display: grid;
  align-content: flex-start;
  grid-gap: 10px;

  @media (max-width: 500px) {
    overflow: scroll;
  }

  @media (min-width: 500px) {
    display: grid;
    grid-gap: 10px;
    flex-direction: column;
    grid-template-columns: auto auto;
    padding: 5px;
    overflow: scroll;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-gap: 20px;
    flex-direction: column;
    grid-template-columns: auto auto auto;
    overflow: initial;
    padding: 20px;
  }

  @media (min-width: 1440px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: auto auto auto auto;
  }
`

export default function MoviePage({
  addFavoritesMovies,
  titleSearch,
  filterMovies,
  movies,
  favoritesMovies,
}) {
  const [pageCount] = useState(1)

  return (
    <PageGrid>
      <Header
        pageCount={pageCount}
        filterMovies={filterMovies}
        titleSearch={titleSearch}
      />
      <MovieContainer>
        {movies.map(movie => (
          <Card
            {...movie}
            rating={movie.vote_average}
            overview={movie.overview}
            title={movie.title}
            src={movie.poster_path}
            key={movie.id}
            movie={movies}
            inFavorites={movie.isInFavorites}
            favoritesMovies={favoritesMovies}
            isBookmarked={movie.isBookmarked}
            addFavoritesMovies={() => addFavoritesMovies(movie)}
          />
        ))}
      </MovieContainer>
    </PageGrid>
  )
}
