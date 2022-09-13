import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {DataContext} from "./dataContext"

function RecipeDetails(props){

    const {idDrink} = useParams()
    const id = idDrink
    console.log(id)
    const {details, recipe, saveRecipe} = useContext(DataContext)
    
    const {
        strAlcoholic,
        strDrink,
        // strDrinkAlternate,
        strDrinkThumb,
        strGlass,
        // strIBA,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strInstructions,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15}
        // strTags,
        // strVideo} 
    = recipe

    const ingredientArr = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15]

    const ingredientsList = ingredientArr.map(ingredient => ingredient && <li>{ingredient}</li>)

    const measuresArr =[
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15]

    const measurementsList = measuresArr.map(measurement => measurement && <li>{measurement}</li>)


    useEffect(()=>{
        details(id)
    },[])

    return(
        <div className="recipeDetails">
            <div className="recipeDetails--title">
                <h1>{strDrink}</h1>
                <p>{strAlcoholic}</p>
            </div>
            <img src={strDrinkThumb} alt=""></img>
            <div className="recipeDetails--details">
                <p>Served in a {strGlass}</p>
                <div className="recipeDetails--ingredients">
                    <ul>
                        {measurementsList}
                    </ul>
                    <ul style={{listStyleType:"none"}}>
                        {ingredientsList}
                    </ul>
                </div>
                <p>{strInstructions}</p>
                <button className="recipeCard--save" style={{alignSelf:"flex-start", justifyContent:"flex-start"}}><img src="https://cdn3.iconfinder.com/data/icons/carbon-mobile-browser/48/add-favorites-512.png" alt="favIcon"  id={id} onClick={saveRecipe}/></button>
            </div>
        </div>
    )

}

export default RecipeDetails