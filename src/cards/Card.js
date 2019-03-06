import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto auto;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
`
const CardDescription = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: space-between;
  background: black;
  color: white;
`
const CardImage = styled.div``

export default function Card({ title, key }) {
  return (
    <StyledCard>
      <CardImage>
        <img src="" alt="" />
      </CardImage>
      <CardDescription id={key}>{title}</CardDescription>
    </StyledCard>
  )
}
