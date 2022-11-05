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
            dob
        },
        toggle
    } = props

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
            <input 
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                />
           }
           { toggle &&
                <input 
                    type="date"
                    value={dob}
                    name="dob"
                    onChange={handleChange}
                    placeholder="Date of Birth"
                />
           }
            <p style={{color:"red"}}>{errMsg}</p>
            <button>{ btnText }</button>
        </form>
    )
}

export default AuthForm