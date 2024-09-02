import React from "react";
import { useSelector } from "react-redux";

const List=()=>
{
    
    let list=useSelector((s:any)=>s.recipes);
    return <div>{list.map((o:any)=>
        (
            <p key={o.name}> {o.name}</p>
        ))}</div>
}
export default List;
// ,{o.numHours}