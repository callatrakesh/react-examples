import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
        <h1>React Project</h1>
        <p>Some examples of react js</p>
        <div className="card">
          <div className='count-box'>
            Count is :
            <button onClick={() => setCount((count) => count + 1)}>+</button>
              <span>{count}</span>
            <button onClick={() => setCount((count) => count - 1)} disabled={count <= 0}>-</button>
          </div>                  
        </div>
      </div>
    </>
  )
}

export default App
