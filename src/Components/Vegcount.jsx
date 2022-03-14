import {Groceries} from "./Veg"

export const Vegcount = () => {
  return (
    <div className="veg">
      <Groceries name ="Tomatoes" add ="addTomatoes" rem = "remTomatoes" value ={10} />
      <Groceries name ="Potatoes" add ="addPotatoes" rem = "remPotatoes" value ={8} />
      <Groceries name ="Carrots" add ="addCarrots" rem = "remCarrots" value ={5} />
      <Groceries name ="Onions" add ="addOnions" rem = "remOnions" value ={7} />

    </div>

  )
}