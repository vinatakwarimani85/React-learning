import CounterButton from "./CounterButton"
import PropTypes from 'prop-types';
import { useState } from "react"

export default function Counter(){
    const [count,setcount] = useState(0)

    function incrementParent(by){
        setcount(count+by)
    }

    function decrementparent(by){
       setcount(count-by)
    }

    return(
        <div className="counter">
            <span>{count}</span>
            <CounterButton by={1} incrementP={incrementParent} decrementp={decrementparent}></CounterButton>
            <CounterButton by={2} incrementP={incrementParent} decrementp={decrementparent}></CounterButton>
            <CounterButton by={5} incrementP={incrementParent} decrementp={decrementparent}></CounterButton>
            
        </div>
    )
    
}

Counter.propTypes = {
    by: PropTypes.number
  };