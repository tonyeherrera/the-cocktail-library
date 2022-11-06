import React, {useState, useContext}from "react"
import {UserContext} from "../../context/userContext"

function SubmissionForm(){

    const {addUserDrink} = useContext(UserContext)

    const initState = {
            strAlcoholic:false,
            strDrink:"",
            // strDrinkAlternate,
            strDrinkThumb:"https://th.bing.com/th/id/OIP.1qaOuwI5Un1wG9hN29U0wAHaIE?w=201&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            strGlass:"",
            // strIBA,
            strIngredient1:"",
            strIngredient2:"",
            strIngredient3:"",
            strIngredient4:"",
            strIngredient5:"",
            strIngredient6:"",
            strIngredient7:"",
            strIngredient8:"",
            strIngredient9:"",
            strIngredient10:"",
            strIngredient11:"",
            strIngredient12:"",
            strIngredient13:"",
            strIngredient14:"",
            strIngredient15:"",
            strInstructions:"",
            strMeasure1:0,
            strMeasure2:0,
            strMeasure3:0,
            strMeasure4:0,
            strMeasure5:0,
            strMeasure6:0,
            strMeasure7:0,
            strMeasure8:0,
            strMeasure9:0,
            strMeasure10:0,
            strMeasure11:0,
            strMeasure12:0,
            strMeasure13:0,
            strMeasure14:0,
            strMeasure15:0,
            // strTags,
            // strVideo} 
    }

    const [inputs, setInputs] = useState(initState)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setInputs(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addUserDrink(inputs)
        setInputs(initState)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="strDrink" value={inputs.strDrink} placeholder="Drink Name" onChange={handleChange}/>
                {/* <input name="description" value={inputs.descriptionDrink}/> */}
                <label>
                    <input name="strAlcoholic" type="checkbox" checked={inputs.strAlcoholic} onChange={handleChange}/>
                    Is this drink Alcoholic?
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SubmissionForm