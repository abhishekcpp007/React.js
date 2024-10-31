//import React from 'react'
import "./card.css"
const card = (props) => {
  return (
    <div className="Card"> 
    <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt=""  width={333}/>
        <h1>{props.title}</h1>
        <p> {props.description}</p>
    </div>
  )
}

export default card