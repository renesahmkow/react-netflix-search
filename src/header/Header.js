import React, { useState, useEffect } from 'react'
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

export default function Header({ titleSearch, filterMovies }) {
  const [headerActive, setHeaderActive] = useState(true)
  const [data, setData] = useState({})

  function handleClick() {
    setHeaderActive(!headerActive)
  }

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
    getFilterData(data)
  }

  function getFilterData(data) {
    filterMovies({ ...data })
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
        onInputChange={onInputChange}
      />
    </section>
  )
}
