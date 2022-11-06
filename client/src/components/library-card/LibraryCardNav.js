import React from "react"
import {Link} from "react-router-dom"


function LibraryCardNav(props){
    const {token} = props


    return (
        <div>
        { token &&
                <nav> 
                    <Link to="/library-card/dashboard">Dashboard</Link>
                    {/* <Link to="/library-card/private-library">Private Library</Link> */}
                    <Link to="/library-card/public-library">Public Library</Link>
                    <Link to="/library-card/submission-form">Submit New Recipe</Link>
                    <Link to="/library-card/user-submissions">Your Submissions</Link>
                    <Link to="/library-card/account-settings">Account Settings</Link>
                </nav>
        }
        </div>
    )
}

export default LibraryCardNav