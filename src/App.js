import React from 'react'
import logo from './logo.svg'
import { ToDo } from './components/ToDo'
import styled, { keyframes } from 'styled-components'

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    a {
      color: #61dafb;
    }
`

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${appLogoSpin} infinite 20s linear;
`

function App() {
  return (
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React
        </a>
      </AppHeader>
      <ToDo />
    </Container>
  )
}

export default App
