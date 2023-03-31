import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'

import Tabs from './component/Tabs'

import { Card } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

    <Nav />
    <Tabs />
 
    <Card />
    </main>
  )
}

export default App
