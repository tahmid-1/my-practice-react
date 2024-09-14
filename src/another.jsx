import { useEffect } from "react";
import { useState } from "react";

export default function Datas(){
    let [tt,fun]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data=>data.json())
        .then(ok=>fun(ok))
    
    },[])
    return(
        <h1>tmi kea tumake to chinlam na{tt.length}</h1>
    )
}