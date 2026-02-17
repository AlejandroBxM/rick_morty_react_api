import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imageRickAndMorty from './img/rick-morty.png'
import './App.css'

function App() {
  const reqApi = () => {
    console.log('click')
  }

  return (
    <>
      <div className="App">
        <header className="App-Header">
          <h1 className='title'> Rick & Morty</h1> 
          <img src={imageRickAndMorty} alt='Rick and morty' className='img-home' />
          <button onClick={reqApi} className='btn-search'> Buscar personajes</button>
        </header>
      </div>
    </>
  )
}

export default App
