import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Card from './Card'
import { location } from './data'

function App() {

  return (
    <>
      <Header />
      <Card location = {location} />
    </>
  )
}

export default App
