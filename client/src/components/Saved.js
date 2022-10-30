import React, {useContext} from "react"
import RecipeCard from "./RecipeCard"
import {DataContext} from "../context/dataContext"

function Saved(){
    const {recipeList, removeRecipe} = useContext(DataContext)
    return(
        <div className="saved">
            <h1>Your Personal Cocktail Menu</h1>
            <hr/>
            <div className="saved--list">
            {recipeList.length > 0 ? recipeList.map(drink => <RecipeCard {...drink} remove={removeRecipe} path="saved" key={drink.idDrink}/>): <h1 style={{justifySelf:"center"}}>Your saved recipes will display here</h1> }
            </div>
        </div>
    )
}

export default Saved