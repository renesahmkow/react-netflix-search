import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from '../GlobalStyle'

const StyledCard = styled.div`
  position: relative;
`

const CardImage = styled.div``

const CardTitle = styled.div`
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

const CardRating = styled.div``

const CardContent = styled.div`
  color: white;
`

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

Card.defaultProps = {
  title: 'No title',
}

export default function Card({ title, src }) {
  const [openCard, setOpenCard] = useState(true)

  function handleClickCard() {
    setOpenCard(!openCard)
  }

  return (
    <StyledCard
      className={openCard ? 'close' : 'open'}
      onClick={handleClickCard}
      data-cy="card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
      }}
    >
      <CardImage
        className={
          openCard ? 'close card--image-close ' : 'open card--image-open'
        }
      />

      <CardTitle data-cy="cardtitle">{title}</CardTitle>

      <CardRating> 5/10 </CardRating>

      <CardContent
        className={openCard ? 'close card--content-close ' : 'open'}
        style={'className' === 'close' ? { display: 'none' } : null}
      >
        Lorem{' '}
      </CardContent>
      <GlobalStyle />
    </StyledCard>
  )
}
