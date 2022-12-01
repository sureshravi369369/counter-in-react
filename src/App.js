import React, { useState } from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0)
     
  // increase:
  const increaseValue=()=>{
    setCount( count+1)
  }

  // decrease:

  const decreaseValue=()=>{
     if(count===0){
      alert("Let's stay positive, shall we?");
     }else{
      setCount(count-1)
     }
  }

  // reset:

  const resetValue=()=>{
    if(count===0){
      alert("donot add the value")
    } else{
      setCount(0)
    }
  }

  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
      </div>
      <div className='btn'>
      <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>
      <button onClick={resetValue}>reset</button>
      </div>
    </div>
  );
}

export default App;
