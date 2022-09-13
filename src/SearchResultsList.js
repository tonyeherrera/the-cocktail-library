import React, { useContext } from "react"
import { DataContext } from "./dataContext"
import RecipeCard from "./RecipeCard"

function SearchResultsList(){

    const {searchResults, saveRecipe} = useContext(DataContext)

    return(
        <div className="search--list">
            {searchResults === "" ? <h1 style={{justifySelf:"center"}}>Your search results will display here!</h1>: <RecipeCard drinks={searchResults.drinks} save={saveRecipe} path="search"/>}
        </div>
    )
} 

export default SearchResultsList