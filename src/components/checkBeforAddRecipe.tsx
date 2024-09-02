import React from "react";
import { useSelector } from "react-redux";
import AddToList from "./addRecipe";
import Login from "./login";

const Check=()=>
    {
        let currUser=useSelector((state: any) => state.currentUser);
        debugger;
        if(currUser.password!="")
            return <AddToList></AddToList>
            else
            {
                return <div>you did not login. please login first</div>
            }

    }
    export default Check