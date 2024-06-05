import './App.css'
import { Children, useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square =  ({ children, isSelected, updateBoard, index }) => {

  //aplicar estilos al turno actual
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    //actualizar celda en el tablero
    updateBoard(index)
  }

  return (
    //renderizar Square
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(
    //crear array del tablero
    Array(9).fill(null)
  )
  
  //setear primer turno
  const [turn, setTurn] = useState(TURNS.X)

  //setear ganador
  const [winner, setWinner] = useState(null)

  //revisar si hay ganador
  const checkWinner =  (boardtoCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardtoCheck[a] &&
        boardtoCheck[a] === boardtoCheck[b] &&
        boardtoCheck[a] === boardtoCheck[c]
      ){
        return boardtoCheck[a]
      }
    }
    //no hay ganador
    return null 
  }

  const updateBoard = (index) => {
    //no actualizar si ya hay algo en la celda
    if (board[index] || winner) return

    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      alert(`El ganador es ${newWinner}`)
    }
  }

  return (
    <main className="board">

      <h1>Tic Tac Toe</h1>

      <section className="game">
        {
          board.map((_,index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

    </main>
  )
}

export default App
