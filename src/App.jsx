import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureCompo from './components.jsx/PureCompo'
import SimpleCompo from './components.jsx/SimpleCompo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCompo />
      <PureCompo />
    </>
  )
}

export default App
