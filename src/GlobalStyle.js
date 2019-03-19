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

  label {
    margin-left: 20px;
    font-weight: bold;
  }

  input, textarea, button {
    font-size: 1em;
  }

  header {
    overflow: hidden;
  }


  .close {
    position: relative;
    height: 200px;
    border-radius: 4px;
    background-size: cover;
    margin-bottom: 5px;
    overflow: hidden;
    transition: all 0.8s ease;
  }

  .cover {
    position: relative;
    background-size: cover;
    height: 200px;
    padding: 15px;
    color: #fff;
    transition: all 0.8s ease;
  }

  .cover__open {
    background-size: cover;
    height: 300px;
  }

  .open {
    display: grid;
    grid-template-rows: 300px auto auto 1fr;
    grid-gap: 5px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0 ;
    overflow: scroll;
    height: 100vh;
    width: 100%;
    background: #607D8B;
    transition: all 0.8s ease;
    z-index: 100;
  }

  .title__open {
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    bottom: 47%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px;
    transition: all 1s ;
  }

  .title__close {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background: black;
    padding: 10px;
    opacity: 0.7;
  }

  .rating__line {
    height: 5px;
    background: lightgreen;
    border-radius: 5px;
  }

  .rating {
    margin-right: 10px;
  }

  .react-icons {
    background-color: blue;
  }

  .icon{
  display: flex;
  }

  .hiddenIcon {
    display: none;
  }

`
