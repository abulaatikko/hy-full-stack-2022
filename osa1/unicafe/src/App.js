import { useState } from 'react'

const Button = (props) => {
  const {text, onClick} = props

  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good + (bad * -1)) / all
  const positive = good / all

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" onClick={() => setGood(good + 1)}/>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={() => setBad(bad + 1)}/>
      <h2>statistics</h2>
      <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {all}<br/>
      average {average || ''}<br/>
      positive {positive || ''} %
      </p>
    </div>
  )
}

export default App