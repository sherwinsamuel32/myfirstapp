import React from 'react'
import { useState } from 'react'
const Classbc = () => {
    let [count,setCount]=useState(0)
    let handleChange=()=>{
        setCount(1)
    }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleChange}>change button</button>
    </div>
  )
}

export default Classbc
