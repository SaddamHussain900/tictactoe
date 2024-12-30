import React,{useEffect, useState} from "react";
import Square from "./Square";
function Board(){
    const [state,setState]=useState(Array(9).fill(null))
    const [isXturn,setXturn]=useState(true)
    const handleClick=(index)=>{
        const copyState=[...state]
        if(copyState[index]!=null){
            console.log("Click at empty box only")
        }
        
        else {
            console.log("click at: ",index)
            
            copyState[index]=isXturn ? "X":"O"
            setState(copyState)
            setXturn(!isXturn)}
    }
    const[jim,setJim]=useState(0)
    
    useEffect(()=>{
        console.log("jim: ",jim)
        setState(Array(9).fill(null))
    },[jim]) 
    const isWinner=()=>{
       const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
       for(let j of arr){
        let [a,b,c]=j
        if(state[a]!==null && state[a]==state[b] && state[a]==state[c]){
            return state[a]
        }
        
       }
       return null
       
    }
    const checkwin=isWinner()
    return (
        <div className="game">
                    <h4>{isXturn ? "This is X's Turn":"This is O's Turn"}</h4>

            <div className="board">

            {checkwin ? (<>{checkwin} won<button onClick={()=>setJim(jim+1)}>Play Again</button>
            </>):(
                
            <>
            
            <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
            <div>            <button onClick={()=>setJim(jim+1)}>Reset</button>
            </div>
            </>
    )}
    </div>
    
        </div> 
       
    )
}
export default Board