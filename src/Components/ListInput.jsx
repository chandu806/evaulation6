import React from "react";
import { useState} from "react";

export const ListInput = ({addList}) => {
  const [ text,setText] = useState("")
  return <div>
    <input type = "text" onChange= {(e) => {
      setText(e.target.value)
    }} />
    <button onClick = { () => {
      addList(text)
    }} >
      Add Item
    </button>
  </div>
}

