import React, {useContext} from "react"
import {UserContext} from "../../context/userContext"
import RecipeCard from "../RecipeCard"

function PublicLibrary(){

    const {publicDrinks} = useContext(UserContext)
    console.log(publicDrinks.length)
    
    return(
        <div style={{marginTop:"100px"}}>
            {publicDrinks.length > 0 ? publicDrinks.map(drink => <RecipeCard {...drink} path="/library-card/public-library" key={drink.idDrink}/>): <h1 style={{justifySelf:"center"}}>Sorry, the public library is currently empty. Try making some <a href="/library-card/submission-form">submissions</a> to help get us started!</h1> }
        </div>
    )
}

export default PublicLibrary