import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const UserContext = React.createContext()
const voterAxios = axios.create() 

voterAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserContextProvider(props){
    const Navigate = useNavigate()
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        errMsg:""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token",token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState( prevUserState => ({
                    ...prevUserState,
                    user, 
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token",token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState( prevUserState => ({
                    ...prevUserState,
                    user, 
                    token,
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
                user: {},
                token: "",
                errMsg:""
        })
        Navigate("/library-card")
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}