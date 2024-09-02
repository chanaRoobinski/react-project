import React, { useState,useContext } from "react";
import { useDispatch } from "react-redux";
import { User } from "../classes/User";
import userContext from '../context';

const SignUp=()=>
    {
    const[newUser,setNewUser]=useState<User | null>();
    let myDispatch=useDispatch()
    const userCon:any=useContext(userContext);
    let isExist:boolean=false;
    const addUser=()=>
        {
          
            debugger
            userCon?.userlist?.forEach((element: User  ) => 
                {
                 if(element?.password==newUser?.password)
                    {
                        myDispatch({type:'setuser',payLoad:newUser});
                        isExist=true;
                    }     
                });
                if(newUser && !isExist)
                    {
                        
                        userCon?.adduser(newUser);
                        myDispatch({type:'setuser',payLoad:newUser});
                    }
        }
        
    

        return <div>
            <input placeholder="name" type="text" onChange={(e)=>setNewUser({...newUser,userName:e.target.value})}></input>
            <input placeholder="password" type="text" onChange={(e)=>setNewUser({...newUser,password:e.target.value})}></input>
            <input placeholder="address" type="text" onChange={(e)=>setNewUser({...newUser,address:e.target.value})}></input>
            <input placeholder="phon" type="text" onChange={(e)=>setNewUser({...newUser,phon:e.target.value})}></input>
            <button  onClick={(e)=>addUser()}>sign up</button>
        </div>
    }
    export default SignUp