import React, { ReactElement, ReactNode, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';



//בשבי ליבא תמונה ניבא אותה עם איזה שם נבחר
import MyLogo from './background.jpg'
import { url } from 'inspector';
import {Provider}from 'react-redux';
import { MyUserProvider } from './context';
import About from './components/about';
import Home from './components/home';
import Login from './components/login';
import List from './components/list';
import myStore from './store/store';
import AddToList from './components/addRecipe';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Nav from './components/nav';
import  Users from './components/users';
import Detailes from './components/detailes';
import './bootstrap.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { User } from './classes/User';
import SignUp from './components/signUp';
import Check from './components/checkBeforAddRecipe';

function App() 
{
  const [userList,setUserList]=useState([]);
  useEffect
  (()=>{
          
         axios.get('http://localhost:3000/users/getAll').then(e=>
         {
          
            setUserList(e.data)
         })
        },[])

  const addUser=(user:any)=>
  {
    axios.post('http://localhost:3000/users/addUser',user).then((e)=>
        {
            
        })
    setUserList(j=>j.concat(user))
  }
const transfer:any=
{
  userlist:userList,
  adduser:addUser
}

  return (
    <div>
   <Provider store={myStore}>
    <MyUserProvider value={transfer}>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Nav/>}>

      <Route path="Home" element={<Home/>}> </Route>
      <Route path="/Home/Detailes/:recip" element={<Detailes></Detailes>}></Route> 

      <Route path="Login" element={<Login/>}>       {/* <Route path="myAddRecipe" element={<Add></Add>}></Route> */}</Route>
      <Route path="SignUp" element={<SignUp/>}></Route>  
     <Route path="About" element={<About/>}></Route>
     <Route path="users" element={<Users/>}></Route>
     {/* <Route path="users" element={<UserList />} /> */}
     <Route path='addRecipe' element={<Check/>}/>
      
     </Route>
    </Routes>
    </BrowserRouter>
   <Outlet></Outlet>
   </MyUserProvider>
    </Provider>
  </div>)
}


export default App;
