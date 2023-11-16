import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()
  return (
    <div className='wrapper'>
      <h1>Memory Game</h1>
      <h2>Check Your Memory 🧠</h2>
      
        <button className='start' onClick={() => {navigate("/Game")}}>Start Game</button>
        

    </div>
  )
}

export default Home