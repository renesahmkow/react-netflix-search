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
  background: #1c3144;
  height: 50px;
  color: white;
  margin-bottom: 5px;

  @media (min-width: 900px) {
  }
`

Header.propTypes = {
  onClick: PropTypes.func,
  headerActive: PropTypes.func,
  titleSearch: PropTypes.func,
}

export default function Header({ titleSearch, filterMovies, pageCount }) {
  const [headerActive, setHeaderActive] = useState(true)
  const [data, setData] = useState({})

  function handleClick() {
    setHeaderActive(!headerActive)
  }

  function getFilterData(data, pageCount) {
    filterMovies({ ...data }, pageCount)
  }

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    getFilterData(data, pageCount)
  }, [data])

  return (
    <section>
      <StyledHeader>
        <h1 data-cy="header-title">MovFix</h1>
        <div onClick={handleClick}>
          <FaSearch style={{ width: 25, height: 25, color: '#CEB992 ' }} />
        </div>
      </StyledHeader>
      <Form
        pageCount={pageCount}
        headerActive={headerActive}
        titleSearch={titleSearch}
        onInputChange={onInputChange}
      />
    </section>
  )
}
