import React, {useState, useEffect} from "react"
import axios from "axios"

const DataContext = React.createContext()

function DataContextProvider(props){
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
    const [searchResults, setSearchResults] = useState("")
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
            .then(response => setSearchResults(response.data))
            .catch(error => console.log(error))
    }

    const [recipeList, setRecipeList] = useState([])

    function lookup(selected){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`)
        .then(response => setRecipeList(prevList => prevList ? [...prevList, response.data.drinks[0]] : [response.data.drinks[0]]))
        .catch(error => console.log(error))
    }

    const [recipe, setRecipe] = useState({})

    function details(selected){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selected}`)
        .then(response => setRecipe(response.data.drinks[0]))
    }

    function saveRecipe(event){
        const id = event.target.id
        console.log(id)
        lookup(id)
    }

    function removeRecipe(event){
        const id = event.target.id
        console.log(id)
        setRecipeList(() => recipeList.filter(item => item.idDrink !== id))
    }

    useEffect(()=>{
        localStorage && setRecipeList(JSON.parse(localStorage.getItem("recipeList")))
    }, [])

    useEffect(() => {
        localStorage.setItem('recipeList', JSON.stringify(recipeList))
        console.log(recipeList)
    }, [recipeList])

    // const [verification, setVerification] = useState([])

    // useEffect(()=>{
    //     sessionStorage && setVerification(JSON.parse(sessionStorage.getItem('verification')))
    // }, [])

    // useEffect(() => {
    //     sessionStorage.setItem('verification', JSON.stringify(verification))
    //     console.log(verification)
    // }, verification)

    


    
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
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, DataContextProvider}
