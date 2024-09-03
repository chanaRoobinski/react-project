import { createStore } from 'redux';
import produce from 'immer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from '../classes/Recipe';
const Mystate = 
{
    recipes:[],
    currentUser:{name:'',password:''},
    counter:0
}

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
