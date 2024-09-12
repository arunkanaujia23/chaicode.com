import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const handleIncrementClick = () => {
    setCount(count + 1)
  }
  const handleDecrementClick = () => {
    setCount(count - 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  if (count < 0) {
    alert('Count limit reached!')
    resetCount()
  }
  if (count >= 21) {
    resetCount()
    alert('Count limit reached!')
  }
  return (
    <>

      <div className='count'>
        Your count is <span>{count}</span>
      </div>
      <div className='btnContainer'>
        <button onClick={handleIncrementClick}>
          Plus
        </button>
        <button onClick={handleDecrementClick}>
          Minus
        </button>
      </div>




    </>
  )
}

export default App
