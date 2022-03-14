import React from "react";
import { ListInput } from "./ListIntput.jsx";
import {useState} from "react"
import { ListItem } from "./ListItem.jsx";

export const List = () => {
  const [list, setList] = useState([])
  
  const addList = (data) => {
    setList([...list, data])
  }


return <div>
  <ListInput addList = {addList} />
  {list.map((e) => (
    <ListItem list = {e} />
  ))}
</div>
};