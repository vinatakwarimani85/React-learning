import {useState} from 'react'



function App() {
  //let count =15
  const [count,setCount]= useState(15)

  const addValue =() =>{
    setCount(count+1)
    }

  const removeValue = () => {
    setCount(count-1)
  }
  
  return (
    <>
      <h1>React with Hitesh {count}</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
