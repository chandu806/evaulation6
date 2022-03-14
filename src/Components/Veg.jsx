import { useState } from "react"
import "./Veg.css"


export function Groceries(props){
  const [counter, setCounter] =useState(props.value)

  const changeVariable=(value) => {
    setCounter(counter + value)
  }

  return(
    <div className="veg">
      <span className="color">{props.name}:</span>
      <button className={props.add} onClick = {() => changeVariable(1)}>Add</button>
      <button className={props.rem} onClick = {() => {
        if(counter >= 1) {
          changeVariable(-1)
        }
      }}>Remove</button>
      <span className={props.total}>{counter}</span>
    </div>
  )
}