import React ,{createContext, useState} from 'react'
import Home from './Home'
import Game from './Game'
import "./Game.css"
import Score from './Score'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

export const cardContext = createContext(null)
function App() {
  
  const [moves, setMoves] = useState(0);
  return (
    <div>
      <cardContext.Provider value={{moves,setMoves}}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/Game' element={<Game/>}> </Route>
            <Route path='/Score' element={<Score/>}> </Route>
        </Routes>
        </BrowserRouter>
        </cardContext.Provider>
    </div>
  )
}

export default App