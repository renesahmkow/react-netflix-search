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
  background-size: cover;
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
  image: PropTypes.string,
}

Card.defaultProps = {
  title: 'No title',
}

export default function Card({ title, src }) {
  return (
    <StyledCard
      data-cy="card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
      }}
    >
      <CardDescription data-cy="cardtitle">{title}</CardDescription>
    </StyledCard>
  )
}
