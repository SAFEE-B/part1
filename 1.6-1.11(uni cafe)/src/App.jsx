import { useState } from 'react'



const Button=({onClickfunc,Text})=><button onClick={onClickfunc}>{Text}</button>

const StatisticLine=({text,value})=>{
return(
  <tbody>
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>
</tbody>
)
}  

const Statistics=({good,bad,neutral})=>{
  if(good+bad+neutral===0){
    return(
    <>
    <table>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      </table>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      
    </>
    )
  }else{
  const All=good+bad+neutral
  const Average=((good*1)+(bad*-1))/(good+bad+neutral)
  const Positive= (good/All)*100
  return(
    <div>
      <table>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={All}/>
      <StatisticLine text="average" value={Average}/>
      <StatisticLine text="positive" value={Positive}/>
      </table>           
    </div>
  )
}
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return(
    <>
    <h1>Give Feedback</h1>
    <Button onClickfunc={()=>setGood(good+1)} Text={"Good"}/>
    <Button onClickfunc={()=>setNeutral(neutral+1)} Text={"Neutral"}/>
    <Button onClickfunc={()=>setBad(bad+1)} Text={"Bad"}/>
    <Statistics good={good} bad={bad} neutral={neutral} />
    </>  
  )  
}

export default App
