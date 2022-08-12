import { useState } from 'react'

const Display = ({ section }) => <h1>{section}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ feeds }) => {
  const good = feeds.good
  const neutral = feeds.neutral
  const bad = feeds.bad
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if ( !total ) return <p>No feedback given</p>
  else {
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + '%'} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [feeds, setFeeds] = useState({
    good: 0, neutral: 0, bad: 0
  })

  return (
    <div>
      <Display section='give feedback' />
      <Button
        handleClick={() => setFeeds({...feeds, good: feeds.good + 1})}
        text="good"
      />
      <Button
        handleClick={() => setFeeds({...feeds, neutral: feeds.neutral + 1})}
        text="neutral"
      />
      <Button
        handleClick={() => setFeeds({...feeds, bad: feeds.bad + 1})}
        text="bad"
      />
      <Display section='statistics' />
      <Statistics feeds={feeds} />
    </div>
  )
}

export default App;
