import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import TabsSlider from './component/TabsSlider'

import { Card } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(false)
  return (
    <main onClick={()=>setHide(false)}>

    <Nav hide={hide} setHide={setHide} />
    <TabsSlider />

     </main>
  )
}

export default App
