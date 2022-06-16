import { useState } from 'react'

const Button = (props) => {
  const {text, onClick} = props

  return <button onClick={onClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good + (bad * -1)) / all
  const positive = 100 * (good / all)

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={all}/>
        <StatisticsLine text="average" value={average}/>
        <StatisticsLine text="positive" value={positive + ' %'}/>
      </tbody>
    </table>
  )
}

const StatisticsLine = ({ text, value }) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" onClick={() => setGood(good + 1)}/>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={() => setBad(bad + 1)}/>
      <h2>statistics</h2>
      {good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>}
    </div>
  )
}

export default App