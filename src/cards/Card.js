import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from '../GlobalStyle'

const StyledCard = styled.div``

const CardContent = styled.div``

const CardCover = styled.div``

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: black;
  padding: 10px;
  opacity: 0.7;
`

const CardRating = styled.div``

const CardDescribtion = styled.div``

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

Card.defaultProps = {
  title: 'No title',
}

export default function Card({ title, src, overview, rating }) {
  const [openCard, setOpenCard] = useState(true)

  function handleClickCard() {
    setOpenCard(!openCard)
  }

  return (
    <StyledCard
      className={openCard ? 'close' : 'open'}
      onClick={handleClickCard}
      data-cy="card"
    >
      <CardContent className="content" className={openCard ? 'close' : 'open'}>
        <CardCover
          className={openCard ? 'cover' : 'cover__open'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
          }}
        >
          <CardTitle className="title" data-cy="cardtitle">
            {title}
          </CardTitle>
        </CardCover>

        <CardRating>{rating}</CardRating>

        <CardDescribtion>{overview}</CardDescribtion>
      </CardContent>

      <GlobalStyle />
    </StyledCard>
  )
}
