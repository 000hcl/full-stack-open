import React, { useState } from 'react'

const StatisticLine = ({text, number}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
  )
}

const average = (good, neutral, bad) => {
  return(
    (good - bad)/(good+neutral+bad)
  )
}

const positive = (good, all) => {
  return(good/all*100)
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  if (all === 0){
    return 'No feedback given'
  }
  return(
    <table>
      <tbody>
        <StatisticLine text={'good'} number={props.good} />
        <StatisticLine text={'neutral'} number={props.neutral} />
        <StatisticLine text={'bad'} number={props.bad} />
        <StatisticLine text={'all'} number={all} />
        <StatisticLine text={'average'} number={average(props.good, props.neutral, props.bad)} />
        <StatisticLine text={'positive'} number={positive(props.good, all)+'%'} />
      </tbody>
    </table>
    
  )
}

const Button = (props) => {
  return(
    <button onClick={props.function}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} function={()=>{setGood(good + 1)}} />
      <Button text={'neutral'} function={()=>{setNeutral(neutral + 1)}} />
      <Button text={'bad'} function={()=>{setBad(bad + 1)}} />
      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App