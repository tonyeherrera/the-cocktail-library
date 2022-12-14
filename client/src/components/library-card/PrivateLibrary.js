import React, {useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../../context/userContext"
import RecipeCard from "../RecipeCard"

function PrivateLibrary(){

    const {publicDrinks, user:{_id}, getPublicDrinks} = useContext(UserContext)

    useEffect(()=>{
        getPublicDrinks()
    }, [])

    return(
        <div>
                {publicDrinks.length > 0 ? publicDrinks.map(drink => drink.user === _id && <RecipeCard {...drink} path="/library-card/public-library" key={drink.idDrink}/>): <h1>Sorry, your private library is currently empty. Check out the <Link to="/library-card/public-library">Public Library</Link> and find some new favorites!</h1> }
        </div>
    )
}

export default PrivateLibrary