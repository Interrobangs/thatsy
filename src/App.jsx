import React, { useState } from 'react'
import './App.css'
import { Button, Paper } from '@material-ui/core'

document.title = 'ThatsY'

function App() {
  const [count, setCount] = useState(Math.PI)
  return (
    <div>
      <p>You clicked {count} times</p>
      <Paper>
        <Button onClick={() => setCount(count * Math.PI)}>Click me</Button>
      </Paper>
    </div>
  )
}

function History() {
  return <ul>Render historik i en liste</ul>
}

export default App
