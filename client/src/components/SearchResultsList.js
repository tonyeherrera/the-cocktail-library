import React, { useContext } from "react"
import { DataContext } from "../context/dataContext"
import RecipeCard from "./RecipeCard"

function SearchResultsList(){

    const {searchResults, saveRecipe} = useContext(DataContext)
    
    return(
        <div className="search--list">
            {searchResults.length < 0  ? <h1 style={{justifySelf:"center"}}>Your search results will display here!</h1> : searchResults.map(drink => <RecipeCard {...drink} save={saveRecipe} key={drink.idDrink}/>)}
        </div>
    )
} 

export default SearchResultsList