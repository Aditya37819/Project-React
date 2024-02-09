import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let addNumber = () => {
    setCount(count + 1);
  }

  let removeNumber = () => {
    
    if(count<=0) return;
    else setCount(count - 1);
  }
  return (
    <>
      <h1>Change Numbers</h1>
      <h2>Count Numbers {count}</h2>
      <button onClick ={addNumber}>Add Value</button>
      <br />
      <button onClick ={removeNumber}>Subtract Value</button>
    </>
  )
}

export default App
