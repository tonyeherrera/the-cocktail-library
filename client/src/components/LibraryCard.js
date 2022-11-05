import React, { useContext } from "react"
import {UserContext} from "../context/userContext"
import {useNavigate} from "react-router-dom"
import Auth from "./library-card/Auth.js"
import Dashboard from "./library-card/Dashboard"
import LibraryCardNav from "./library-card/LibraryCardNav"

function LibraryCard(){

    const {token, signup, login, errMsg, resetAuthErr, user:{username}, logout } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <div>
            
            { !token ?
                <Auth signup={signup} login={login} errMsg={errMsg} resetAuthErr={resetAuthErr}/>
            :
                navigate('/library-card/dashboard')
            }
        </div>
    )
}

export default LibraryCard