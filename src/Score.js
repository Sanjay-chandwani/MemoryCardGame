import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cardContext } from './App'

function Score() {
  const {moves,setMoves} = useContext(cardContext)
    const navigate = useNavigate()
  return (
    <div className='score'>
      <h1>You have completed the game Successfully 💪</h1>
      <h2>You took <span>{moves} moves</span> to complete the game</h2>
    <button onClick={() => {navigate("/");setMoves(0)}}>Play Again</button>
    </div>
  )
}

export default Score