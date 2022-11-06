import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import {UserContext} from "../context/userContext"
import {DataContext} from "../context/dataContext"
import Menu from "./Menu"
// import logo from "./logo(2).png"


function Nav(){

    const {verification, setVerification} = useContext(DataContext)
    const {token, logout} = useContext(UserContext)
    const navigate = useNavigate()

    function logoutNow(){
        setVerification(false)
        logout()
    }

    function navLogin(){
        navigate('/library-card')
      }
    
    return(
        <div className="navBar">
            {/* <img src={logo} height="40px" width="250px" id="logo" alt="Logo"/> */}
            <h2 id="logo"><a href="/" style={{textDecoration:"none"}}>The Cocktail Library</a></h2>
            <button onClick={token ? logoutNow : navLogin} style={{marginLeft:"350px"}}>{token ? "Logout" : "Login" }</button>
            {verification &&
                <Menu verification={verification} token={token} logout={logout} />
            }
        </div>
    )
}

export default Nav