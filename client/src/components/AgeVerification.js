import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import { DataContext } from "../context/dataContext"


function AgeVerification(){

    const [DOB, setDOB] = useState({
        month:"",
        day:"",
        year:""})

    const navigate = useNavigate()
    const {setVerification} = useContext(DataContext)

    function handleChange(event){
        const {name, value} = event.target
        setDOB(prevDOB => {
            return{
                ...prevDOB,
                [name]:value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const userDOB = DOB.month + "/" + DOB.day + "/" + DOB.year
        const userDOBMill = Date.parse(userDOB)
        console.log(userDOBMill)
        console.log(Date.now())
        const age = Math.floor((Date.now() - userDOBMill)/31556952000)
        console.log(age)
        if(age < 21 || !age){
            setVerification(false)
            navigate("/sorry")
        }else{
            setVerification(true)
            navigate('/')
        }
    }

    const maxYear = new Date().getFullYear()

        return(
            <div>
                <h1>Welcome</h1>
                <h3>You must be 21 years old to enter this website.</h3>
                <h3>Please enter date of birth</h3>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="month" value={DOB.month} placeholder="MM" max={12} onChange={handleChange}></input>
                    <input type="number" name="day" value={DOB.day} placeholder="DD" max={30} onChange={handleChange}></input>
                    <input type="number" name="year" value={DOB.year} placeholder="YYYY" max={maxYear} onChange={handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
}

export default AgeVerification