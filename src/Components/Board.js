import { useState } from "react";
import Square from "./Square";

function Board(){
    const [array,setArray]=useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn]=useState(true)

    const handleClick = (index) =>{
        const copyArray =[...array]
        copyArray[index]=isXTurn?'X':'O'
        setArray(copyArray)
        setIsXTurn(!isXTurn)
    }

    const checkWinner = ()=>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
          const [a,b,c] = logic;
          if(array[a]!=null && array[a]===array[b] && array[a]===array[c])
            return array[a];
        }

        return false;
    }

    const isWinner=checkWinner();

    const handleReload = ()=>{
        setArray(Array(9).fill(null))
    }

    return(
        <div className="container">
            <div className="board">
            <h2>TIC TAC TOE</h2>

            {isWinner?(
                <>
                <h2>{isWinner} won the game</h2>
                <button onClick={handleReload}>Reload</button>
                </>
            ):""}
                <div className="row">
                    <Square onClick={()=> handleClick(0)} value={array[0]}></Square>
                    <Square onClick={()=> handleClick(1)} value={array[1]}></Square>
                    <Square onClick={()=> handleClick(2)} value={array[2]}></Square>
                </div>

                <div className="row">
                    <Square onClick={()=> handleClick(3)} value={array[3]}></Square>
                    <Square onClick={()=> handleClick(4)} value={array[4]}></Square>
                    <Square onClick={()=> handleClick(5)} value={array[5]}></Square>
                </div>

                <div className="row">
                    <Square onClick={()=> handleClick(6)} value={array[6]}></Square>
                    <Square onClick={()=> handleClick(7)} value={array[7]}></Square>
                    <Square onClick={()=> handleClick(8)} value={array[8]}></Square>
                </div>

            </div>
        </div>
    )
}

export default Board;