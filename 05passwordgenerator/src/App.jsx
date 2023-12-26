import { useState,useCallback ,useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] =useState('') 
  const passwordref = useRef(null)

  useEffect( ()=>{
    generatePassword()
   },[length,numberAllowed,charAllowed])

  const generatePassword = useCallback( ()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+"

    for(var i=0;i<length;i++){
      const char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

 


  const copyPasswordToClipBoard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordref.current.select()

  }


  return (
   <div className='bg-gray-800 w-full text-orange-500'>
    <h1 className='text-white text-center '>Password</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordref}/>
      <button className='outline-none bg-blue-700 text-white px-3' onClick={copyPasswordToClipBoard}>copy</button>
    </div>
    <div className='felx text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) =>setLength(e.target.value)} name='' />
        <label>Length:{length}</label>
      </div>

      <div className='flex item-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
          setNumberAllowed( (prev) => !prev)
        }} />
        <label htmlFor="number">Numbers</label>

      </div>

      <div className='flex item-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
          setCharAllowed( (prev) => !prev)
        }} />
        <label htmlFor="charInput">Charecters</label>

      </div>
    </div>

   </div>
  )
}

export default App
