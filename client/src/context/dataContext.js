import React, {useState, useEffect, useCallback} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const DataContext = React.createContext()

function DataContextProvider(props){
    const navigate = useNavigate()
    const [random, setRandom] = useState(
        { "drinks": [
        {
            "idDrink": "",
            "strDrink": "",
        }
    ]})

    function getRandom(){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => {
                setRandom(response.data)
                console.log(response.data.drinks)
            }) 
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        getRandom()
    },[])


    const [params, setParams] = useState({category:"default",keyword:""})
    const [searchResults, setSearchResults] = useState([])
    // search key: 
    //     name = s
    //     ingredient = i
    const [navPath, setNavPath] = useState("")
    const [navKey, setNavKey] = useState("")
    useEffect(()=> {
        switch(params.category){
            case "name":
                setNavPath("search");
                setNavKey("s");
                break;
            case "ingredients":
                setNavPath("filter");
                setNavKey("i");
                break;
            case "alcoholic":
                setParams(prevParams => {
                    return{
                        ...prevParams,
                        keyword:"Alcoholic"
                    }
                })
                setNavPath("filter");
                setNavKey("a");
                break;
            default:
                setNavPath("");
                setNavKey("");
                break;
    }},[params.category])

    function search(userInput){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${navPath}.php?${navKey}=${userInput.keyword}`)
            .then(response => {
                setSearchResults(response.data.drinks)
                console.log(response.data.drinks)
            }
            )
            .catch(error => console.log(error))
    }

    const [recipeList, setRecipeList] = useState([])

    function lookup(selected){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`)
        .then(response => setRecipeList(prevList => prevList ? [...prevList, response.data.drinks[0]] : [response.data.drinks[0]]))
        .catch(error => console.log(error))
    }

    function updateRecipeList(id){
        recipeList && recipeList.some(drink => drink.idDrink === id) &&
        setRecipeList(prevList => prevList.filter(drink => drink.idDrink !== id))
    }

    const [recipe, setRecipe] = useState({})

    const details = useCallback(selected => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`)
        .then(response => setRecipe(response.data.drinks[0]))
    },[])

    function saveRecipe(id){ 
        console.log(id)
        lookup(id)
    }

    function removeRecipe(id){
        setRecipeList(recipeList.filter(drinks => drinks.idDrink !== id))
    }

    useEffect(()=>{
        localStorage && setRecipeList(JSON.parse(localStorage.getItem("recipeList")))
    }, [])

    useEffect(() => {
        localStorage.setItem('recipeList', JSON.stringify(recipeList))
        console.log(recipeList)
    }, [recipeList])

    const [verification, setVerification] = useState(false)

    useEffect(()=>{
        sessionStorage && setVerification(JSON.parse(sessionStorage.getItem('verification')))
    }, [sessionStorage])

    useEffect(() => {
        sessionStorage.setItem('verification', JSON.stringify(verification))
    }, [verification])

    function redirect(){
        verification !== true && navigate("/")
    }
    


    
    return(
        <DataContext.Provider value = {{
            random,
            setRandom,
            getRandom,
            params,
            setParams,
            searchResults,
            setSearchResults,
            search,
            lookup,
            recipe,
            details,
            saveRecipe,
            recipeList,
            removeRecipe,
            verification,
            setVerification,
            redirect,
            updateRecipeList
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, DataContextProvider}
