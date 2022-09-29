import React from "react"
import {Routes, Route} from "react-router-dom"
import {DataContextProvider} from "./dataContext"
import Home from "./Home"
import AgeVerification from "./AgeVerification"
import Search from "./Search"
import Saved from "./Saved"
import Nav from "./Nav"
import Footer from "./Footer"
import RecipeDetails from "./RecipeDetails"
import Sorry from "./Sorry"


function App(props) {
  return (
    <>
      <DataContextProvider>
        <Nav />
        <div className="content">
        <Routes>
          <Route path="/" element = {<AgeVerification/>}/>
          <Route path='sorry' element = {<Sorry/>}/>
          <Route path="home" element = {<Home />}/>
          {/* <Route path="about" element = {<About />}/> */}
          <Route path="search" element = {<Search />}/>
          <Route path="saved" element = {<Saved />}/>
          <Route path="/recipe/:idDrink" element={<RecipeDetails />} />
        </Routes>
        </div>
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
