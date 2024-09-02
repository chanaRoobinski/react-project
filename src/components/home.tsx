import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Recipe } from "../classes/Recipe";
import { Link, Outlet } from "react-router-dom";
import Detailes from "./detailes";
const Home=()=>
{
    let userName=useSelector((s:any)=>s.currentUser.name);
    let userPassword=useSelector((s:any)=>s.currentUser.password);
    let counter=useSelector((e:any)=>e.counter);
    let myDisp=useDispatch();
    
    let recipes=useSelector((r:any)=>r.recipes)
   useEffect(()=>
{
  console.log("Home component mounted");
  if(recipes.length==0)
    axios.get('//localhost:3000/recipes/getAll').then((data)=>
{
  
  myDisp({type:'creatRecipes' , payload:data.data});
})
},[]);

    // const increase=()=>
    // {
    //     myDisp({type:"updateCounter",payLoad:++counter})
    // }
     recipes=useSelector((r:any)=>r.recipes);
     
     const x:Recipe=recipes[0];
     console.log(x);
     
    const onDelete=(id:any,pass:any)=>
    {
       if(pass=='')
       {
        alert("please login");
        return;
       }

        axios.delete(`//localhost:3000/recipes/delete/${id}/${pass}`)
        .then((response)=>
        {
          console.log(response);
          alert(response.data);
          axios.get('//localhost:3000/recipes/getAll')
          .then((data) => 
            {
              debugger;
            myDisp({ type: 'creatRecipes', payload: data.data });
            });
          

        })
        .catch((err)=>
        {
          console.error("error on delete recipe",err);
        })
    }


    return <div className="recip-grid"> <div className="recipe-card ">
        { 
        recipes?.map((r:Recipe)=>
        <p className="all-recip" key={r.name}>
          <h2>{r.name} | {r.level}</h2>
          <br></br>
          <Link  to={`Detailes/${encodeURIComponent(JSON.stringify(r))}`} ><img className="img" src={`http://localhost:3000/${r.picture}`}></img> </Link>  
          <br/>
          <button onClick={()=>onDelete(r._id,userPassword)}>delete</button>
          </p>)}; 
         <Outlet></Outlet>
         </div></div>;
}
export default Home;