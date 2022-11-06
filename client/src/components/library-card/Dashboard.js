import React from "react"


function Dashboard(props){

    const {user, logout} = props

    return(
        <div style={{marginTop:"100px"}}>
            <h1>Welcome {user} this portion of the site is still under construction</h1>
        </div>
    )
}

export default Dashboard