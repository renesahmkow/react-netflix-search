import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Form from '../search/Form'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  padding: 20px 25px 10px 25px;
  background: #1c3144;
  margin-bottom: 5px;
  transition: all 0.7s ease;

  @media (min-width: 900px) {
    height: 100%;
  }
`

const BurgerMenu = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.7s ease-out;
  cursor: pointer;

  &.open {
    transform: rotate(-45deg);
  }
`

const Bar = styled.div`
  width: 100%;
  height: 5px;
  background: #ceb992;
  border-radius: 5px;

  &.half {
    width: 50%;
  }

  &.bottom {
    align-self: flex-end;
    transform-origin: left;
    transition: transform 0.7s ease;

    &.open {
      transform: rotate(-450deg) translateX(0.8rem);
    }
  }

  &.top {
    transform-origin: right;
    transition: transform 0.7s ease;

    &.open {
      transform: rotate(-450deg) translateX(-0.8rem);
    }
  }
`

Header.propTypes = {
  onClick: PropTypes.func,
  headerActive: PropTypes.func,
  titleSearch: PropTypes.func,
}

export default function Header({ titleSearch, filterMovies, pageCount }) {
  const [headerActive, setHeaderActive] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [data, setData] = useState({})

  function handleClick() {
    setHeaderActive(!headerActive)
  }

  function handleCickBurgerMenu() {
    setBurgerMenu(!burgerMenu)
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
    <StyledHeader>
      <h1
        style={{ display: 'flex', alignItems: 'center' }}
        data-cy="header-title"
      >
        AppFlix
      </h1>

      <div onClick={handleClick}>
        <FaSearch style={{ width: 25, height: 25, color: '#CEB992 ' }} />
      </div>

      {/* <BurgerMenu
        className={burgerMenu ? 'open' : null}
        onClick={handleCickBurgerMenu}
      >
        <Bar className={burgerMenu ? 'open top half' : 'top half'} />
        <Bar />
        <Bar className={burgerMenu ? 'open bottom half' : 'bottom half'} />
      </BurgerMenu> */}

      <Form
        pageCount={pageCount}
        headerActive={headerActive}
        titleSearch={titleSearch}
        onInputChange={onInputChange}
      />
    </StyledHeader>
  )
}
