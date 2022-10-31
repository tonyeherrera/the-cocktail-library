import React from "react"


function Dashboard(props){

    const {user, logout} = props

    return(
        <div>
            <h1>Welcome {user} this portion of the site is still under construction</h1>
        </div>
    )
}

export default Dashboard