import logo from './logo.svg';
import './App.css';
import { List } from './Components/List.jsx';

import { Vegcount } from './Components/Vegcount.jsx';


function App() {
  return (
    <div className="App">
      <h1>Wishlist</h1>
      <List />
      <h1>Vegetables</h1>
      {/* <Groceries name ="tomatoes" add ="addTomatoes" rem = "remTomatoes" value ={10} />
      <Groceries name ="potatoes" add ="addPotatoes" rem = "remPotatoes" value ={8} />
      <Groceries name ="carrots" add ="addCarrots" rem = "remCarrots" value ={5} />
      <Groceries name ="onions" add ="addOnions" rem = "remOnions" value ={7} /> */}
      <Vegcount />
    </div>
  );
}

export default App;