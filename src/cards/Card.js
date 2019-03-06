import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 200px;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`
const CardDescription = styled.div`
  grid-row-start: 2;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  opacity: 0.7;
`

Card.propTypes = {
  title: PropTypes.string,
  key: PropTypes.number.isRequired,
  image: PropTypes.string,
}

export default function Card({ title, src }) {
  return (
    <StyledCard
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
        backgroundSize: 'cover',
      }}
    >
      <CardDescription>{title}</CardDescription>
    </StyledCard>
  )
}
