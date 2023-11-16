import React, { useContext, useEffect, useState } from 'react';
import one from "./images/1.avif";
import two from "./images/2.avif";
import three from "./images/3.avif";
import four from "./images/4.webp";
import five from "./images/5.avif";
import six from "./images/6.webp";
import mark from "./images/mark.webp";
import { useNavigate } from 'react-router-dom';
import { cardContext } from './App';

function Game() {
  const navigate = useNavigate()
  const [data, setData] = useState([
    {
      image: one,
      id: "one",
    },
    {
      image: two,
      id: "two",
    },
    {
      image: three,
      id: "three",
    },
    {
      image: four,
      id: "four",
    },
    {
      image: five,
      id: "five",
    },
    {
      image: six,
      id: "six",
    },
    {
      image: one,
      id: "one",
    },
    {
      image: two,
      id: "two",
    },
    {
      image: three,
      id: "three",
    },
    {
      image: four,
      id: "four",
    },
    {
      image: five,
      id: "five",
    },
    {
      image: six,
      id: "six",
    },
  ]);
  const [flip, setFlip] = useState([]);
  const [match, setMatch] = useState([]);
  const {moves, setMoves} =useContext(cardContext)

  useEffect(() => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (match.length === 2 ) {
        setMoves(moves +1)
        if(flip[0] !== flip[1]){
          if (match[0] === match[1]) {
            setFlip([]);
           
              console.log("match confirmed");
              
              const newdata = data.map((card) => {
                if (card.id === match[0]) {
                  return {...card, matched: true};
                }
                return card;
              });
              if (newdata.every(card => card.matched)) {
                navigate("/Score")
              } else {
                setData(newdata); 
                setMatch([]); 
              }
           
          }
          else {
            setFlip([]);
            setMatch([]);
          }
        }
      }
    }, 500);
  }, [data, match]);
  

  function flipHandle(index,id) {
    if (flip.length < 2 && match.length < 2){
      setFlip([...flip,index])
      setMatch([...match,id])
    } else {
      setFlip([])
      setMatch([])
    }
  }

  return (
    <div className='game'>
      <div className='moves'><h1>Moves : {moves}</h1></div>
      <div className='box'>
        {data.map((element, index) => {
          return (
            <div className={`card${element.matched ? ' matched' : ''}`} key={index} onClick={()=> {flipHandle(index,element.id)}} >
                <div className="card-inner" style={{ transform: flip.includes(index) ? 'rotateY(180deg)' : "none"}}>
                  <div className="card-front">
                    <img src={mark}></img>
                  </div>
                  <div className="card-back">
                    <img src={element.image} ></img>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
)
}

export default Game