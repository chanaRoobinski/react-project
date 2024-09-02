import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Recipe } from "../classes/Recipe";
import axios from "axios";

const AddToList=()=>
{
    let myDispatch=useDispatch();
    let flag:boolean=true;
    let currUser=useSelector((state: any) => state.currentUser)

    let myName=useRef(null);
    let myImage =useRef(null);
    let myLevel =useRef(null);
    let myKind =useRef(null);
    let myTime =useRef(null);
    let myIngredients =useRef(null);
    const[kind,setKind]=useState();

    const changeKind=(event:any)=>
        { 
            setKind(event.target.value);
        }

    const add=()=>
    {
        
        let n:any=myName.current
        if(n.value=="")
            {
                n.style.borderColor="red"
                n.focus();
                flag=false;
            }

        let i:any=myImage.current
        // if(i.value=="")
        //     {
        //         i.style.borderColor="red"
        //         i.focus();
        //         flag=false;
        //     }
        let l:any=myLevel.current
        if(l.value=="")
           {
               l.style.borderColor="red"
               l.focus();
               flag=false;
           }   
        
        let t:any=myTime.current
        if(t.value=="")
            {
                t.style.borderColor="red"
                t.focus();
                flag=false;
            } 

        let ingred:any=myIngredients.current;
        let ingredArr:Array<{}>=[];
        if(ingred.value=="")
            {
                ingred.style.borderColor="red";
                ingred.focus();
                flag=false;
            }
            else
            {
                
                let arr:Array<any>=ingred?.value.split(',');
                ingredArr=new Array();
                arr.forEach(element => 
                    {
                        console.log(element);

                    let e=element.split(" ");

                    console.log(e);
                    
                        let name:string="";
                        let quan:string;

                        if(e.length>2)
                            {
                                console.log(e[0]);
                                console.log(e[1]);

                                quan=e[0]+" "+e[1];
                                for(let k=2;k<e.length;k++)
                                    name+=e[k]+" ";
                            }
                         else
                         {
                            name=e[1];
                            quan=e[0];
                         } 

                         console.log(name) ;
                         console.log(quan);

                         if(name!=" " && quan!=" ")
                            ingredArr.push({"name":name,"quantity":quan});
                    });    
            
            }
            
        if(flag) 
        {
                console.log(ingredArr);

                let newRecipe:Recipe=new Recipe
                (
                    n?.value , 
                    i?.value ,
                    l?.value,
                    kind,
                    t?.value,
                    currUser?.password,
                    ingredArr
                );

                myDispatch({type:'addRecipes',payLoad:newRecipe});

                console.log(newRecipe);

                axios.post('http://localhost:3000/recipes/addRecipe',newRecipe)

                .then((e)=>
                {
                alert("added succefuly");

                console.log(e);
                })

                .catch((err)=>
                {
                    alert("error: "+ err);
                })
                //console.log(newRecipe)
        }
    }
    // return <div>
    //     <input type="text" placeholder="name" onChange={(e)=>setSubject({...subject,name:e.target.value})}></input>
    //     <input type="number" placeholder="num hours" onChange={(e)=>setSubject({...subject,numHours:e.target.value})}></input>
    //     <input onClick={()=>add()}>add</input>
    //     </div>
    
    
    return <div>
        <input placeholder="name" type="text" ref={myName}></input>
        <input placeholder="image link" type="text" ref={myImage}></input>
        <input placeholder="level" type="text" ref={myLevel}></input> <br/>
        <label>kind:</label>
        <form>
            <label htmlFor="diary">diary</label>
            <input id ="dairy" type="radio" value="dairy" onChange={(e)=>changeKind(e)} name="" ></input> <br/>
            <label htmlFor="meat">meat</label>
            <input id="meat" type="radio" value="meat" onChange={(e)=>changeKind(e)} ></input> <br/>
            <label htmlFor="parve">parve</label>
            <input id="parve" type="radio" value="parve" onChange={(e)=>changeKind(e)} ></input>
        </form>
        
        <input placeholder="time" type="text" ref={myTime}></input>
        <input placeholder="הכנס מצרכים מופרדים בפסיקים ביניהם" type="text" style={{ direction: 'rtl', textAlign: 'right' }}  ref={myIngredients}></input>
        <input type="submit" onClick={()=>add()}></input>
    </div>
}
export default AddToList