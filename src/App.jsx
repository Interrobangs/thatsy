import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import 'typeface-roboto'
import './App.css'

document.title = 'thatsY'

const initialValue = Math.PI
const initialHistoryItems = []

function App() {
  const [value, setValue] = useState(initialValue)
  const [items, setItems] = useState(initialHistoryItems)
  return (
    <div class="buttons">
      <p>You've earned {Math.round(value)} pies</p>
      <ActionButton
        action={() => {
          setItems([...items, value])
          setValue(value * initialValue)
        }}
        label="Work"
      />
      <ActionButton
        action={() => setValue(initialValue) & setItems(initialHistoryItems)}
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
