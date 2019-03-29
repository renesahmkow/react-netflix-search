import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import Header from '../header/Header'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

const MovieContainer = styled.div`
  display: grid;
  align-content: flex-start;
  grid-gap: 10px;
  overflow-y: scroll;
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
