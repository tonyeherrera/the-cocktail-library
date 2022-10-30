import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import {DataContext} from "../context/dataContext"
// import logo from "./logo(2).png"


function Nav(){

    const {verification} = useContext(DataContext)

    const [menuClick, setMenuClick] = useState(false)

    function openNav() {
        document.getElementById("myNav").style.width = "25%";
        setMenuClick(true)
      }
      
      /* Close when someone clicks on the "x" symbol inside the overlay */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        setMenuClick(false)
      }



    return(
        <div className="navBar">
            {/* <img src={logo} height="40px" width="250px" id="logo" alt="Logo"/> */}
            <h2 id="logo">The Cocktail Library</h2>
            {verification === true && 
                <>
                    <div id="myNav" className="overlay">
                        <button className="closebtn" onClick={closeNav}>&times;</button>
                        <nav className="overlay-content">
                            <Link to="/" style={{textDecoration:'none'}} onClick={closeNav}>Home</Link>
                            {/* <Link to="about" style={{textDecoration:'none'}} onClick={closeNav}>About</Link> */}
                            <Link to="search" style={{textDecoration:'none'}} onClick={closeNav}>Search</Link>
                            <Link to="saved" style={{textDecoration:'none'}} onClick={closeNav}>Saved</Link>
                            <Link to="library-card" style={{textDecoration:'none'}} onClick={closeNav}>Library Card</Link>
                        </nav>
                    </div>
                    <button onClick={menuClick ? closeNav : openNav} id="menu"><img src="https://th.bing.com/th/id/OIP.8SVagWcPVq64blbs65KoVgHaHk?w=191&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" id="menu--image" alt="menu"></img></button>
                </>
            }
        </div>
    )
}

export default Nav