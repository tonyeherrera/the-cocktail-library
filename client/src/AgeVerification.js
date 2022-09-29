import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
// import { DataContext } from "./dataContext"


function AgeVerification(){

    const [dob, setDob] = useState({
        month:"",
        day:"",
        year:""})

    const navigate = useNavigate()
    // const {verification, setVerification} = useContext(DataContext)

    function handleChange(event){
        const {name, value} = event.target
        setDob(prevDob => {
            return{
                ...prevDob,
                [name]:value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const userDob = dob.month + "-" + dob.day + "-" + dob.year
        const userDobMill = Date.parse(userDob)
        console.log(userDobMill)
        console.log(Date.now())
        const age = Math.floor((Date.now() - userDobMill)/31104000000)
        console.log(age)
        if(age < 21){
            // setVerification(false)
            navigate("/sorry")
        }else{
            // setVerification(true)
            navigate('/home')
        }
    }

    const maxYear = new Date().getFullYear()

        // {if(verification[0] === true){
        //     navigate("/home")
        // }else if(verification[0] === false){
        //     navigate("/sorry")
        // }else{
        return(
            <div>
                <h1>Welcome</h1>
                <h3>You must be 21 years old to enter this website.</h3>
                <h3>Please enter date of birth</h3>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="month" value={dob.month} placeholder="MM" max={12} onChange={handleChange}></input>
                    <input type="number" name="day" value={dob.day} placeholder="DD" max={30} onChange={handleChange}></input>
                    <input type="number" name="year" value={dob.year} placeholder="YYYY" max={maxYear} onChange={handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    // }}
    
}

export default AgeVerification