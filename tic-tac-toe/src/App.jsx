import { useState } from "react";

const Square = ({value, onSquareClick}) => {
  return <button className="square" onClick={onSquareClick} >{value}</button>
}


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquare = squares.slice();
    //check here if something's buuggy lol
    if(nextSquare[i] || calculateWinner(nextSquare)) return;
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  let winner = calculateWinner(squares);
  let status;
  status = winner ? "Winner: " + winner : "Next player:" + (xIsNext ? "X": "O");
  return(
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
   
}


function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++){
    const [x,y,z] = lines[i];
    if(squares[x] && squares[x] == squares[y] && squares[x] == squares[z]) return squares[x];
  }
  return;
}
