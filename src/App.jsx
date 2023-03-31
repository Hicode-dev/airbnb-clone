import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Tabs from './component/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

    <Nav />
    <Tabs />
    </main>
  )
}

export default App
