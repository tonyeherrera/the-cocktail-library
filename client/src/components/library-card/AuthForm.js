import React from "react"

function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg, 
        inputs:{
            username,
            password,
            email,
            dob,
            emailUpdates
        },
        toggle
    } = props

    {errMsg && console.log(errMsg)}

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"/>
            <input
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password" 
            />
           { toggle &&
                <>
                    <input 
                        type="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Email Address"
                    />
                    <input 
                        type="date"
                        value={dob}
                        name="dob"
                        onChange={handleChange}
                        placeholder="Date of Birth"
                    />
                    <label>
                        <input name="emailUpdates" onChange={handleChange} checked={emailUpdates} type="checkbox"/>Subscribe to email updates
                    </label>
                </>
           }
            <button>{ btnText }</button>
            {errMsg && <p style={{color:"red"}}>{errMsg}</p>}
        </form>
    )
}

export default AuthForm