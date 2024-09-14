import { useState } from "react";

export default function Sta(){
    let [state,f]=useState(0);
function add(){
    let ok= state+1;
    f(ok)
}
function remove(){
    let ok2=state-1;
    f(ok2)
}
    return(
      <div>
        <h1>Colect{state}</h1>
        
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
        </div>  
    )

}
// export  function Ok(){
// return <p>my name is </p>
// }