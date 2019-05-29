import React, { useState, useEffect } from 'react'
import Axios from 'axios'
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
const Genre = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
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
  genre,
  isBookmarked,
  inFavorites,
}) {
  const [openCard, setOpenCard] = useState(true)
  const [toggleIcon, setToggleIcon] = useState(false)
  const [genreNames, setGenreNames] = useState([])

  useEffect(() => {
    getMovieGenres()
  }, [])

  async function getMovieGenres() {
    const genreString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'

    await Axios.get(genreString).then(res => {
      const { genres } = res.data
      setGenreNames(genres.find(movie => movie.id === genre[0]))
    })
  }

  function handleClickCard() {
    setOpenCard(!openCard)
  }

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
          <div
            className={openCard ? 'none' : 'rating__line'}
            style={{ width: 10 * rating + '%' }}
          />
          <div className={openCard ? 'none' : 'rating'}>{rating}/10</div>
        </CardRating>

        <Genre className={openCard ? 'none' : null}>
          <div style={{ marginRight: '10px' }}>Genre:</div>
          <div>{genreNames.name}</div>
        </Genre>

        <CardIconsContainer className={openCard ? 'none' : null}>
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

        <CardDescribtion className={openCard ? 'none' : null}>
          {overview}
        </CardDescribtion>
      </CardContent>

      <GlobalStyle />
    </StyledCard>
  )
}
