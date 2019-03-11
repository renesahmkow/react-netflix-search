import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }

  html, body {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

  input, textarea, button {
    font-size: 1em;
  }

  header {
    overflow: hidden;
  }

  .close {
  display: grid;
  grid-template-rows: 1fr auto;
  height: 200px;
  border: 2px solid;
  border-radius: 4px;
  overflow: hidden;
  background-size: cover;
  margin-bottom: 5px;
  background-size: cover;

  }

  .open {
    position: absolute;
    display: grid;
    grid-template-rows: 1fr auto 50px 1fr;
    height: 100vh;
    border-radius: 4px;
    overflow: hidden;
    background-color: blue;
    margin-bottom: 5px;
    text-align: center;
    transition: all .4s ease-in-out,
  }

  .card--content-close {
    display: none;
    background: black;
  }

  .card--image-close {
    display: none;
    background: black;
  }

  .card--image-open {
    height: 250px;
    background: yellow;
  }

`
