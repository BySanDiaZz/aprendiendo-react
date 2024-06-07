import './App.css'
import { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constans' 
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameToStorage, resetGameFromStorage } from './storage'


function App() {

  //crear array del tablero
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  //setear primer turno
  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })

  //setear ganador
  const [winner, setWinner] = useState(null)

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

    //guardar partida
    saveGameToStorage(newBoard, newTurn)

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } 
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  //resetear juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameFromStorage()
  }

  return (
    <main className="board">

      <h1>Tic Tac Toe</h1>

      <section className="game">
        {
          board.map((square,index) => {
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

      <section>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
