import React, { useState } from 'react'
import styled from 'styled-components'
import Form from '../search/Form'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  align-items: center;
  background: black;
  height: 50px;
  width: 100%;
  color: white;
  margin-bottom: 5px;
`

Header.propTypes = {
  onClick: PropTypes.func,
  headerActive: PropTypes.func,
  titleSearch: PropTypes.func,
}

export default function Header({ titleSearch, genreSearch, ratingSearch }) {
  const [headerActive, setHeaderActive] = useState(true)

  function handleClick() {
    setHeaderActive(!headerActive)
  }

  return (
    <section>
      <StyledHeader>
        <h1 data-cy="header-title">Neflixsearch</h1>
        <div onClick={handleClick}>
          <FaSearch style={{ width: 25, height: 25 }} />
        </div>
      </StyledHeader>
      <Form
        headerActive={headerActive}
        titleSearch={titleSearch}
        ratingSearch={ratingSearch}
        genreSearch={genreSearch}
      />
    </section>
  )
}
