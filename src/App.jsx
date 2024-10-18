
import './App.css'
import "./Card.css"
import Card from "./Card.jsx"
import {useState} from "react"
function App() {
  const[cards,setCards]=useState([{title:"Card1",content:"Content1"}])

  
 
  const cardgenerator=()=>{
    const newObject={
      title: `Card ${cards.length+1}`,
      content: `Content ${cards.length+1}`
    }
    setCards([...cards,newObject]);
  }
  return (
    <>
    <div className="app">
      <button onClick={cardgenerator}>Card Generator</button>
     <div className="card-container">
      {cards.map((card,index)=>{
        return(
          <Card title={card.title} content={card.content} key={index}/>
        )
      })}
     </div>
     </div>
    </>
  )
}

export default App
