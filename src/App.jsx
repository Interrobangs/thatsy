import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import 'typeface-roboto'
import './App.css'

document.title = 'thatsY'

const initialCount = Math.PI
const initialHistoryItems = []

function App() {
  const [value, setValue] = useState(initialCount)
  const [items, setItems] = useState(initialHistoryItems)
  return (
    <div class="buttons">
      <p>You've earned {value} pies</p>
      <ActionButton
        action={() => {
          setItems([...items, value])
          setValue(value * initialCount)
        }}
        label="Click"
      />
      <ActionButton
        action={() => setValue(initialCount) & setItems(initialHistoryItems)}
        label="Reset"
      />
      <History items={items} />
    </div>
  )
}

function ActionButton(props) {
  return (
    <Button variant="contained" onClick={props.action}>
      {props.label}
    </Button>
  )
}

function History(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default App
