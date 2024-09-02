import React from "react";
import { useEffect, useState,useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import axios from 'axios' 
import { MyUserProvider } from '../context';
//import { , useState } from 'react';
import userContext from '../context';
import { User } from "../classes/User";

// const UserList=()=>
// {
//     const[userList,setuserList]=useState()
//     debugger
//   useEffect(()=>
//         {
//          axios.get('http://localhost:1234/users/getAll').then(e=>
//          {
//             debugger
//             setuserList(e.data.data)
//          })
//         },[])
        
const UserList = () => {
    const  userlist:any   = useContext(userContext);
    console.log(userlist);
        // const addUser=(user)=>
        // {
        //     setuserList(j=>j.concat(user))
        // }
    // const del=(id) =>
    // {
    //  axios.delete('http://localhost:3000/users/del/id')
    // }  
    useEffect(()=>{
       console.log(userlist)
        })
   
        
    return <div className=".user-list">
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>address</th>
                    <th>phon</th>
                    <th>is manager?</th>
                </tr>
            </thead>
            {userlist?.userlist.map((e:any)=>
            <tbody>
                <td key={e.password}>   
                    <td>{e.userName}</td>
                    <td>{e.address} </td>
                    <td>{e.phon}</td>
                    <td>{e.isManager}</td>
                </td>
            </tbody>)}
            </table> 
             <Outlet></Outlet>
             </div>
     
}
export default UserList