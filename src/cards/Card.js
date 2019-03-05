import React from 'react'
import styled from 'styled-components'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 5px;

  overflow: scroll;
`
const StyledCard = styled.div`
  display: grid;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
`
const CardDescription = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: space-between;
  background: black;
  color: white;
`
const CardImage = styled.div`
  width: 26vw;
  height: 39vw;
`

export default function CardsPage() {
  const movies = [
    {
      title: 'Der Herr der Ringe',
      genre: 'Fantasy',
    },
    { title: 'the Transporter', genre: 'Action' },
    { title: 'Fyre', genre: 'Doku' },
  ]

  console.log(movies)

  return (
    <PageGrid>
      <StyledCard>
        <CardImage>
          <img src="" alt="" />
        </CardImage>
        <CardDescription>
          <p>{movies.title}</p>
          <p>{movies.genre}</p>
        </CardDescription>
      </StyledCard>
      <StyledCard>
        <CardImage>Enter Images here</CardImage>
        <CardDescription>
          <p>enter title and gerne here </p>
          <p> Genre</p>
        </CardDescription>
      </StyledCard>
      <StyledCard>
        <CardImage>Enter Images here</CardImage>
        <CardDescription>
          <p>enter title and gerne here </p>
          <p> Genre</p>
        </CardDescription>
      </StyledCard>
      <StyledCard>
        <CardImage>Enter Images here</CardImage>
        <CardDescription>
          <p>enter title and gerne here </p>
          <p> Genre</p>
        </CardDescription>
      </StyledCard>
    </PageGrid>
  )
}
