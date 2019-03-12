import React, { useState } from 'react'
import styled from 'styled-components'
import Form from '../search/Form'
import PropTypes from 'prop-types'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 50px;
  width: 100%;
  color: white;
  margin-bottom: 5px;
  transition: all 0.9s ease-in-out;
`

Header.propTypes = {
  onClick: PropTypes.func,
  headerActive: PropTypes.func,
  titleSearch: PropTypes.func,
}

export default function Header(titleSearch) {
  const [headerActive, setHeaderActive] = useState(true)

  function handleClick() {
    setHeaderActive(!headerActive)
  }

  return (
    <section>
      <StyledHeader onClick={handleClick}>
        <h1 data-cy="header-title">Neflixsearch</h1>
      </StyledHeader>
      <Form headerActive={headerActive} titleSearch={titleSearch} />
    </section>
  )
}
