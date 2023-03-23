import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

    <Nav />
    </main>
  )
}

export default App
