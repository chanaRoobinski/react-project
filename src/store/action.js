

export  function setnameUser(val)
{
    debugger
    return {type:'setuser',payload:val}
}

export function addToList(recipesData)
{
    return {type:'creatRecipes' , payload:recipesData}
}