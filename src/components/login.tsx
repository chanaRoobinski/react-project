import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import userContext from "../context";
import UserList from "./userList";
import { User } from "../classes/User";
const Login=()=>
{
    const [currentUser,setCurrentUser]:any=useState({});
    let userCon:any=useContext(userContext);
    let list=userCon?.userlist;
    let flag=false;
    let myDispatch=useDispatch()
    const sendToStore=()=>
    {
      debugger
      list?.forEach((element:User ) => 
        {
         if(element?.password==(currentUser?.password) )
              flag=true;
        });
        if(!flag)
           alert( "you didn't register yet,please sign up");
         else 
           myDispatch({type:'setuser',payLoad:currentUser})
    }     
      
    
    

    return <div>
      Login <br/>
        <input placeholder="name" type='text' onChange={(e)=>setCurrentUser({...currentUser,userName:e.target.value})}></input>
        <input placeholder="password" type='password' onChange={(e)=>setCurrentUser({...currentUser,password:e.target.value})}></input>
        <input placeholder="login" type="submit" onClick={()=>sendToStore()}></input>
    </div>
}
export default Login;