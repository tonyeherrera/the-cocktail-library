import React, {useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {DataContext} from "../context/dataContext"


function RecipeCard(props){
   
    const {save, ...drink} = props
    const [toggle, setToggle] = useState(false)
   
   
   
   const {saveRecipe, removeRecipe} = useContext(DataContext)
   const {
        idDrink,
        strDrinkThumb,
        strDrink,
        strAlcoholic,
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
        strIngredient15
        } = drink

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

        const ingredientsList = ingredientArr.map(ingredient =>  {
            return ingredient && <li>{ingredient}</li> 
        })

        function toggleSave(e){
            setToggle(true)
        }

        useEffect(()=> {
            toggle &&
                saveRecipe(idDrink)
       }, [toggle])

        return(
            <div className="recipeCard">
                <Link to={`/recipe/${idDrink}`} style={{textDecoration:"none"}}>
                    <img src={strDrinkThumb} className="recipeCard--img" alt="drink thumbnail"/>
                </Link>
                <div className="recipeCard--details">
                    <h2 style={{margin:"0", fontSize:"15px"}}>{strDrink}</h2>
                    {strAlcoholic && <p style={{margin:"0", fontSize:"12px"}}>{strAlcoholic && strAlcoholic === "Alcoholic" ? "Contains Alcohol":"Non-Alcoholic"}</p>}
                    <hr style={{width:"80%"}}></hr>
                    <ul style={{margin:"0", fontSize:"12px"}}>
                        {ingredientsList}
                    </ul>
                        {props.save && <button className="recipeCard--save" style={{alignSelf:"flex-start", justifyContent:"flex-start"}}><img src="https://cdn3.iconfinder.com/data/icons/carbon-mobile-browser/48/add-favorites-512.png" alt="favIcon"  id={idDrink} onClick={toggleSave}  style={{backgroundColor:toggle && "yellow"}}/></button>}

                        {props.remove &&  <button className="recipeCard--remove" style={{alignSelf:"flex-end", justifyContent:"flex-end"}}  ><img src="https://th.bing.com/th/id/R.28c8fb93b3748e16c0878c0e71efb2f3?rik=2FMOW%2fbqVBmtag&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_304350.png&ehk=IkC6YMie%2f2uam4UNx5qnfUcw9L06EwYBCSCPjctwnf4%3d&risl=&pid=ImgRaw&r=0" alt="delete" id={idDrink} onClick={removeRecipe}/></button>}
                </div>
            </div>
        )
}

export default RecipeCard