import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="font-display" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-mono text-lg'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-2xl font-body'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-3xl font-body underline">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
