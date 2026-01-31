import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './components/Child'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const parent = (data) => {
    console.log(data);
  }


  return (
    <>
      <h1>Learning Props</h1>
      <div className="cards">
        <Card heading="card-1" title="This is card-1" />
        <Card heading="card-2" title="This is card-2" />
        <Card heading="card-3" title="This is card-3" />
        <Card heading="card-4" title="This is card-4" />

        <Child sendData={parent} />
      </div>
    </>
  )
}

export default App
