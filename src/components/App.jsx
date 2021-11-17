import React, { useState } from 'react'

function App() {
  let now = new Date().toLocaleTimeString() // 1st instance of time
  console.log(time)

  const [time, setTime] = useState(now) // so that useState() can use it

  function updateTime() {
    const newTime = new Date().toLocaleTimeString() // 2nd instance of time
    setTime(newTime)
  }
  setInterval(updateTime, 1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  )
}

export default App
