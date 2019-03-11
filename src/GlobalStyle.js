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
    border: 2px solid;
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
    background-repeat: no-repeat;
    padding: 15px;
    color: #fff;
    transition: all 0.8s ease;
  }

  .cover__open {
    
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
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
    grid-template-rows: 300px 40px 1fr;
    padding: 10px;
    overflow: scroll;
    grid-gap: 5px;
    height: 100vh;
    width: 100%;
    background: white;
    margin-bottom: 5px;
    transition: all .7s ease;
    z-index: 100;
  }
`
