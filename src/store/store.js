import { createStore } from 'redux';
import produce from 'immer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from '../classes/Recipe';
const Mystate = 
{
    
    // listSubject:[
    //     {name:'math',numHours:4},
    //     {name:'English',numHours:3},
    //     {name:'tora',numHours:3},
    //     {name:'hebrew',numHours:3}
    // ],
    recipes:[],
    currentUser:{name:'',password:''},
    counter:0
}
// const data =async()=>
// {
//    return (await axios.get('http://localhost:3000/recipes/getAll')).data
    
//  }

const reducer = produce(
    (state, action) => 
    {
    switch (action.type) 
    {
        case 'setuser':
            {
               // debugger;
          state.currentUser.name=action.payLoad.userName;
          state.currentUser.password=action.payLoad.password;
          alert("login succefuly");
          break;
            }
            case 'addRecipes':
                {
                    state.recipes.push(action.payload);
                    
                    break;
                }
        case 'creatRecipes':
            {
                if(state.recipes.length==0)
                    action.payload.forEach(e => 
                   {
                    state.recipes.push(e)
                   });
                else
                   state.recipes=action.payload;
                
                
             break;
            }
        case 'updateCounter':
            {
                state.counter=action.payLoad
                break;
            }    
        

    }
    }, Mystate)
    const myStore = createStore(reducer);
    window.store = myStore;
    export default myStore;
