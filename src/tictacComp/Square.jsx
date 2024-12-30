import React from "react";
function Square(props){
    return (
        <div 
        style={{color:"green", fontSize:"30px", border:"10px solid",width:"100%", height:"100px",display:"flex", justifyContent:"center",alignItems:"center"}}
        onClick={props.onClick}
         >{props.value}</div>
    )
}
export default Square