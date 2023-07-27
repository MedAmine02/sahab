import { useState } from 'react'

import SahabLogo from '../assets/img/sahab_logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={SahabLogo} className="" alt="SahabDev logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img  />
        </a>
      </div>
      <h1>SahabDev</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
