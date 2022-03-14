import React from "react";
import { ListInput } from "./ListInput.jsx";
import {useState} from "react"
import { ListItem } from "./ListItem.jsx";

 const List = () => {
  const [list, setList] = useState([])
  
  const addList = (data) => {
    setList([...list, data])
  }
console.log(list)

return <div>
  <ListInput addList = {addList} />
  {list.map((e) => (
    <ListItem list = {e} />
  ))}
</div>
};

export{List}