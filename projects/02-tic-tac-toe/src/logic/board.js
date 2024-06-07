import { WINNER_COMBOS } from "../constans"

export const checkWinnerFrom =  (boardtoCheck) => {
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

//revisar si el juego terminó
export const checkEndGame = (newBoard) => {
  return newBoard.every((Square) => Square !== null)
}