import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"

const Nav=()=>
{
return <nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
  </div>
  <ul className="nav navbar-nav">
    <li className="active"><Link to="/Home">דף הבית</Link></li>
    <li><Link to="/About">אודות</Link></li>
    <li><Link to="/Login">התחברות</Link></li>
    <li><Link to="/SignUp">הרשמה</Link></li>
    <li><Link to="/users">משתמשים</Link></li>
    <li><Link to="/addRecipe">הוספת מתכון</Link></li>
  </ul>
</div>
<Outlet></Outlet>
</nav>
}
export default Nav