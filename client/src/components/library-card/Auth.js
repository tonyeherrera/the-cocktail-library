import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import AuthForm from "./AuthForm.js"
import {DataContext} from "../../context/dataContext"

const initInputs = {username: "", password: "", email: "", dob: "", emailUpdates: false}


function Auth (props){
    const {signup, login, errMsg, resetAuthErr} = props
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const {setVerification} = useContext(DataContext)

    const navigate = useNavigate()

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: type === "checkbox" ? checked : value,
            memberSince:Date.now()
        }))
        resetAuthErr()
    }

    function handleSignup(e){
        e.preventDefault()
        const thing = new Date(inputs.dob)
        const age = Math.floor((Date.now() - thing)/31556952000) 
        console.log(age)
        age < 21 ? 
        navigate("/sorry")
        :
        signup(inputs)
        setVerification(true)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
        setVerification(true)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return(
        <div className="auth-container">
            <h1>Library Card</h1>
            { !toggle ?
             <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    errMsg={errMsg}
                    toggle={toggle}
                />
                <p onClick = {toggleForm}>Not a member?</p>
            </>
            :
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Sign Up"
                        errMsg={errMsg}
                        toggle={toggle}
                    />
                    <p onClick= {toggleForm}>Already a member?</p>
                </>
            }
        </div>
    )
};

export default Auth
