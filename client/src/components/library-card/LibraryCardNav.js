import React from "react"
import {Link} from "react-router-dom"


function LibraryCardNav(props){
    const {token} = props


    return (
        <div>
        { token &&
                <nav style={{backgroundColor:'black'}}> 
                    <Link to="/library-card/dashboard" style={{margin:'10px', textDecoration:'none'}} >Dashboard</Link>
                    {/* <Link to="/library-card/private-library">Private Library</Link> */}
                    <Link to="/library-card/public-library" style={{margin:'10px', textDecoration:'none'}}>Public Library</Link>
                    <Link to="/library-card/submission-form" style={{margin:'10px', textDecoration:'none'}}>Submit New Recipe</Link>
                    <Link to="/library-card/user-submissions" style={{margin:'10px', textDecoration:'none'}}>Your Submissions</Link>
                    <Link to="/library-card/account-settings" style={{margin:'10px', textDecoration:'none'}}>Account Settings</Link>
                </nav>
        }
        </div>
    )
}

export default LibraryCardNav