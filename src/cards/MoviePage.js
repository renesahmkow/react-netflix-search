import React from 'react'
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
  onBookmark,
  titleSearch,
  filterMovies,
  movies,
}) {
  return (
    <PageGrid>
      <Header filterMovies={filterMovies} titleSearch={titleSearch} />
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
            onBookmark={() => onBookmark(movie)}
          />
        ))}
      </MovieContainer>
    </PageGrid>
  )
}
