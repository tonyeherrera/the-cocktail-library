import React, { useContext } from "react"
import { DataContext } from "../context/dataContext"
import RecipeCard from "./RecipeCard"

function SearchResultsList(){

    const {searchResults, saveRecipe} = useContext(DataContext)
    
    return(
        <div className="search--list">
            {searchResults && searchResults.length > 0  ? searchResults.map(drink => <RecipeCard {...drink} save={saveRecipe} key={drink.idDrink} path="search"/>) : !searchResults ?  <h1 style={{justifySelf:"center"}}>Sorry, no results found for that entry</h1> : <h1>Your search results will display here!</h1> }
        </div>
    )
} 

export default SearchResultsList