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

export default function Card(movies) {
  return (
    <PageGrid>
      <StyledCard>
        <CardImage>
          <img src="" alt="" />
        </CardImage>
        <CardDescription>
          <p>{movies.findByIndex}</p>
        </CardDescription>
      </StyledCard>
    </PageGrid>
  )
}
