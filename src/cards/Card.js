import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from '../GlobalStyle'
import { FaTv, FaRegTimesCircle } from 'react-icons/fa'

const StyledCard = styled.div`
  color: white;
  background: darkgray;
`

const CardContent = styled.div``

const CardCover = styled.div``

const CardTitle = styled.div``

const CardRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`

const CardIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const CardIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
`

const CardDescribtion = styled.div`
  padding: 15px;
  line-height: 1.5;
`

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

Card.defaultProps = {
  title: 'No title',
}

export default function Card({
  title,
  src,
  overview,
  rating,
  addFavoritesMovies,
  movie,
  isBookmarked,
  inFavorites,
}) {
  const [openCard, setOpenCard] = useState(true)
  const [toggleIcon, setToggleIcon] = useState(false)

  function handleClickCard() {
    setOpenCard(!openCard)
  }

  console.log(inFavorites)

  function addFavorites(event) {
    event.stopPropagation()
    addFavoritesMovies(movie)
    setToggleIcon(!toggleIcon)
  }

  return (
    <StyledCard
      className={openCard ? 'close' : 'open'}
      onClick={handleClickCard}
      data-cy="card"
    >
      <CardContent className={openCard ? 'close' : 'open '}>
        <CardCover
          className={openCard ? 'cover' : 'cover__open'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
          }}
        >
          <CardTitle
            className={openCard ? 'title__close' : 'title__open'}
            data-cy="cardtitle"
          >
            {title}
          </CardTitle>
        </CardCover>

        <CardRating>
          <div className="rating__line" style={{ width: 10 * rating + '%' }} />
          <div className="rating">{rating}/10</div>
        </CardRating>

        <CardIconsContainer>
          <CardIcons
            onClick={addFavorites}
            className={inFavorites ? 'react-icons' : null}
          >
            {isBookmarked ? (
              <FaRegTimesCircle style={{ width: 25, height: 25 }} />
            ) : (
              <FaTv style={{ width: 25, height: 25 }} />
            )}
          </CardIcons>
        </CardIconsContainer>

        <CardDescribtion>{overview}</CardDescribtion>
      </CardContent>

      <GlobalStyle />
    </StyledCard>
  )
}
