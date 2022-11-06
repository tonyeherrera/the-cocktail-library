import React, { useContext } from "react"
import {UserContext} from "../context/userContext"
import {useNavigate} from "react-router-dom"
import Auth from "./library-card/Auth.js"

function LibraryCard(){

    const {token, signup, login, errMsg, resetAuthErr } = useContext(UserContext)
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