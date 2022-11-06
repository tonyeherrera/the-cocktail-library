import React, {useState, useContext} from "react"
import {UserContext} from "../../context/userContext"

function AccountSettings(){
    
    const {user, editAccount} = useContext(UserContext)
    const {username, memberSince, email, dob, password, _id} = user

    console.log(_id)

    const begining = new Date(memberSince).toDateString()
    const DateOfBirth = new Date(dob).toDateString()

    const [toggle, setToggle] = useState(false)
    const [btnText, setBtnText] = useState("Edit Info")
    const [pwToggle, setPwToggle] = useState(false)
    const [pwBtnText, setPwBtnText] = useState("Update Password")
    const [pwSubmitText, setPwSubmitText] = useState("Submit New Password")
    const [inputs, setInputs] = useState({
        username: "",
        email:"",
        emailUpdates:false
    })
    const [passwords, setPasswords] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:"",
        password:""
    })
    const [passwordError, setPasswordError] = useState("")

    function toggleEdit(){
        setToggle(prevToggle => !prevToggle)
        setBtnText(toggle ? "Edit Info" : "Back")
    }

    function handleChange(e){
        const {name, value, checked, type} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        setToggle(prev => !prev)
        setBtnText("Edit Info")
        console.log(inputs)
    }

    function togglePasswordEdit(){
        setPwToggle(prev => !prev)
        setPwSubmitText("Submit New Password")
        setPwBtnText(pwToggle ? "Update Password" : "Cancel")
    }

    function handlePasswordChange(e){
        setPasswordError("")
        const {name, value} = e.target
        setPasswords(prevPasswords => ({
            ...prevPasswords, 
            [name]: value
        }))
    }

    function handlePasswordSubmit(e){
        e.preventDefault()
        if(passwords.oldPassword === password && passwords.newPassword === passwords.confirmPassword ){
            setPasswords(prev => ({
            ...prev,
            password: passwords.newPassword
            }))
            setPwSubmitText("Are you sure?")
        }else {
            setPasswordError("Old password is incorrect or new passwords do not match")
        }
    }

    function submitNewPassword(e){
        e.preventDefault()
        editAccount(_id, {password:passwords.password})
        console.log({password:passwords.password})
        setPwToggle(prev => !prev)
        setPwBtnText("Update Password")
        setPwSubmitText("Submit New Password") 
    }

    return(
        <div>
            {!toggle ?
                <>
                    <h1>Username: {username}</h1>
                    <p>Member Since: {begining}</p>
                    <h3>Email: {email}</h3>
                    <h3>Date of Birth: {DateOfBirth}</h3>
                </>
            :
                <form onSubmit={handleSubmit}>
                    <input name="username" value={inputs.username} placeholder={username} onChange={handleChange}/>
                    <input name="email" value={inputs.email} placeholder={email} onChange={handleChange}/>
                    <label>
                        <input name="emailUpdates" onChange={handleChange} checked={inputs.emailUpdates} type="checkbox"/>Subscribe to email updates
                    </label>
                    <button>Submit</button>
                </form>

            }
            {pwToggle &&
                <form onSubmit={pwSubmitText === "Submit New Password" ? handlePasswordSubmit: submitNewPassword}>
                    <input name="oldPassword" value={inputs.oldPassword} placeholder="Old Password" onChange={handlePasswordChange}/>
                    <input name="newPassword" value={inputs.newPassword} placeholder="New Password" onChange={handlePasswordChange}/>
                    <input name="confirmPassword" value={inputs.confirmPassword} placeholder="Confirm Password" onChange={handlePasswordChange}/>
                    <button>{pwSubmitText}</button>
                </form>
                
            }
            {pwToggle && passwordError !== "" && <p>{passwordError}</p>}
            {!pwToggle && <button onClick={toggleEdit} >{btnText}</button>}
            {!toggle && <button onClick={togglePasswordEdit} >{pwBtnText}</button>}
        </div>
    )
}

export default AccountSettings