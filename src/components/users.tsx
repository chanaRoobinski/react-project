import React from "react";
import userContext from "../context"
import { useContext, useEffect, useState } from "react"
import UserList from "./userList";
import axios from "axios";
import { useSelector } from "react-redux";
import {User} from "../classes/User"

const Users=()=>
{
    const localList:User[]=useContext(userContext)
    let currUser=useSelector((state: any) => state.currentUser)
                       
    const [cUser,setCUser]=useState<User[] | null>(null);debugger;
    useEffect(()=>
    {
        
        console.log(currUser);
        axios.get(`http://localhost:3000/users/getByName&Pass/${currUser.name}/${currUser.password}/`)
        .then((res)=>
        {
            //debugger ;
            console.log(res);
            const userData=res.data
            setCUser(userData);
            
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        })
    },[]);
    
    console.log(cUser);
    if(cUser &&cUser[0] && cUser[0].isManager)
        {
            return (<div>
            <UserList></UserList>
        </div>);
        }
    else
      return <div>you dont have a permision</div>

    
}
export default Users