import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const UserContext = React.createContext()
const userAxios = axios.create() 

userAxios.interceptors.request.use(config => {
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

    const [publicDrinks, setPublicDrinks] = useState([])

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token",token)
                localStorage.setItem("user", JSON.stringify(user))
                sessionStorage.setItem("verification", true)
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
                sessionStorage.setItem("verification", true)
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
        sessionStorage.setItem("verification", false)
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

    function editAccount(id,update){
        userAxios.put(`/auth/${id}`, update)
            .then(res => {
                login(res.data)
            })
            .catch(err => console.log(err))
    }

    function getPublicDrinks(){
        userAxios.get('/api/userDrinks')
            .then(res => setPublicDrinks(res.data))
            .catch(err => console.log(err))
    }

    function removeUserDrink(id){
        userAxios.delete(`/api/userDrinks/${id}`)
            .then(res => getPublicDrinks())
            .catch(err => console.log(err))
    }

    function addUserDrink(newDrink){
        userAxios.post('/api/userDrinks', newDrink)
            .then(res => {
                setPublicDrinks(prev => ([
                    ...prev,
                    res.data
                ]))})
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        getPublicDrinks()
    }, [])

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                editAccount,
                addUserDrink,
                publicDrinks,
                removeUserDrink
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}