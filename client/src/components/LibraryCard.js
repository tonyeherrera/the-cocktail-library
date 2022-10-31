import React, { useContext } from "react"
import {UserContext} from "../context/userContext.js"
import Auth from "./library-card/Auth.js"
import Dashboard from "./library-card/Dashboard"

function LibraryCard(){

    const {token, signup, login, errMsg, resetAuthErr, user:{username}, logout } = useContext(UserContext)

    return(
        <div>
            { !token ?
                <Auth signup={signup} login={login} errMsg={errMsg} resetAuthErr={resetAuthErr}/>
            :
                <Dashboard user={username} logout={logout}/>
            }
        </div>
    )
}

export default LibraryCard