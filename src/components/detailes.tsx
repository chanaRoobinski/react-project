import React from "react";
import { useParams } from "react-router-dom"
import { Recipe } from "../classes/Recipe";

const Detailes=()=>
{
    let { recip } = useParams();
    let r: Recipe=new Recipe(null,null,null,null,null,null,[null]);
    debugger;
    try 
    {
      r = JSON.parse(decodeURIComponent(recip!));
    } 
    catch (e) 
    {
      console.error('Failed to parse recipe:', e);
    }


    return<div className="recipe-details"> 
    <p className="deta">
      <h2>{r?.name}</h2> 
      <br></br>
      {r?.level} | {r?.time} | {r?.kind} <br/>
      <h4>ingredients:</h4> 
      {r?.ingredients.map((i)=>
       <p>
        {i.quantity} {i.name} 
        </p>)}
    </p>
    <img className="img" src={`http://localhost:3000/${r?.picture}`} alt={r?.name}></img> 
  </div>
}
export default Detailes