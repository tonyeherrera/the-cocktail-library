import React, {useContext} from "react"
import {UserContext} from "../context/userContext"
import {DataContext} from "../context/dataContext"
import Menu from "./Menu"
// import logo from "./logo(2).png"


function Nav(){

    const {verification} = useContext(DataContext)
    const {token, logout} = useContext(UserContext)
    

    return(
        <div className="navBar">
            {/* <img src={logo} height="40px" width="250px" id="logo" alt="Logo"/> */}
            <h2 id="logo">The Cocktail Library</h2>
            <Menu verification={verification} token={token} logout={logout} />
        </div>
    )
}

export default Nav