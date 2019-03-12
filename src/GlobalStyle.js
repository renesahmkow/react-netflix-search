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
    position: relative;
    height: 200px;
    border-radius: 4px;
    background-size: cover;
    margin-bottom: 5px;
    transition: all 0.8s ease;
    overflow: hidden;
  }

  
  .content {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
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
    background-size: cover;
    transition: all 0.8s ease;
  }

  .open {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0 ;
    display: grid;
    grid-template-rows: 300px 40px auto 1fr;
    overflow: hidden;
    margin-bottom: 100px;
    height: 100%;
    width: 100%;
    background: #607D8B;
    transition: all 0.8s ease;
    z-index: 100;
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


`
