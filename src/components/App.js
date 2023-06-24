
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
const App = () => {

  const[item, setItem] = useState("")
  const[filter, setFilter] = useState([])

  useEffect(()=>{
    let arr = fruits.filter(fruit=>{
      return (fruit.includes(item))
    })
    setFilter(arr)
  },[item])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" onChange={e=>setItem(e.target.value)}/>

        <ul>
          {
            filter.map(item=>(
              <li>{item}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
