import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../../context/userContext"
import RecipeCard from "../RecipeCard"

function UserSubmissions(){

    const {publicDrinks, user:{_id}} = useContext(UserContext)

    return(
        <div>
            {publicDrinks.length > 0 ? publicDrinks.map(drink => drink.user === _id && <RecipeCard {...drink} path="/library-card/public-library" key={drink.idDrink} remove="remove"/>): <h1>Sorry, your private library is currently empty. Check out the <Link to="/library-card/public-library">Public Library</Link> and find some new favorites!</h1> }
        </div>
    )
}

export default UserSubmissions