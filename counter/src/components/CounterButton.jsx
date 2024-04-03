import { useState } from "react"


export default function CounterButton({by,incrementP,decrementp}){

   
    function increment(){
        incrementP(by)
    }
    function decrement(){
        decrementp(by)
    }

    return(
        <div className="CounterButton">
            
        
            <div>
            <button onClick={increment}>+{by}</button>
            <button onClick={decrement}>-{by}</button>

            </div>
            
        </div>
    )
}

