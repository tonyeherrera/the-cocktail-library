import React, {useContext} from "react"
import RecipeCard from "./RecipeCard"
import {DataContext} from "./dataContext"

function Saved(){
    const {recipeList, removeRecipe} = useContext(DataContext)
    return(
        <div className="saved">
            <h1>Your Personal Cocktail Menu</h1>
            <hr/>
            <div className="saved--list">
            {recipeList.length > 0 ? <RecipeCard drinks={recipeList} remove={removeRecipe} path="saved"/>: <h1 style={{justifySelf:"center"}}>Your saved recipes will display here</h1> }
            </div>
        </div>
    )
}

export default Saved