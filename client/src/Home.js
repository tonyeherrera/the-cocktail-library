
import React, {useContext} from "react"
import RecipeCard from "./RecipeCard"
import {DataContext} from "./dataContext"


function Home(){

    const {random, saveRecipe} = useContext(DataContext)
    const {strDrink} = random

    return(
        <div className="home">
            <h1 style={{marginBottom:0}}>Welcome to </h1>
            <h2 style={{marginTop:0}}>The Cocktail Library</h2>
            <br></br>
            <h4>Wanna try something new? Click on the recipe below!</h4>
            {random === "" ? <></> : <RecipeCard 
                key={strDrink}
                path="home"
                drinks={random.drinks}
                save={saveRecipe} 
            />}
        </div>
    )
}

export default Home