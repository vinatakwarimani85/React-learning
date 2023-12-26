import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
    
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button  onClick={() => changeColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test</button>
        <button  onClick={() => changeColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test2</button>
        <button   onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test3</button>
      </div>
    </div>
  )
}

export default App
