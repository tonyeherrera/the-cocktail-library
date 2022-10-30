import React, {useContext} from "react"
import {Routes, Route} from "react-router-dom"
import {DataContext} from "./context/dataContext"
import Home from "./components/Home"
import AgeVerification from "./components/AgeVerification"
import Search from "./components/Search"
import Saved from "./components/Saved"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import RecipeDetails from "./components/RecipeDetails"
import Sorry from "./components/Sorry"
import LibraryCard from "./components/LibraryCard"
// import AgeProtectedRoute from "./AgeProtectedRoute"

function App(props) {

  const {verification} = useContext(DataContext)

  return (
    <>
        <Nav />
        <div className="content">
        <Routes>
          <Route path="/" element = {!verification ? <AgeVerification/> : <Home />}/>
          <Route path="sorry" element = {!verification && <Sorry />}/>
          {/* <Route path="/"
            element = {
              <AgeProtectedRoute verification={verification} redirectTo="/">
                <Home />
              </AgeProtectedRoute>
            }
          /> */}
          {/* <Route path="search"
            element = {
              <AgeProtectedRoute verification={verification} redirectTo="/">
                <Search />
              </AgeProtectedRoute>
            }
          />
          <Route path="saved"
            element = {
              <AgeProtectedRoute verification={verification} redirectTo="/">
                <Saved />
              </AgeProtectedRoute>
            }
          />
          <Route path="/reccipe/:idDrink"
            element = {
              <AgeProtectedRoute verification={verification} redirectTo="/">
                <RecipeDetails />
              </AgeProtectedRoute>
            }
          />
          <Route path="library-card"
            element = {
              <AgeProtectedRoute verification={verification} redirectTo="/">
                <LibraryCard />
              </AgeProtectedRoute>
            }
          /> */}
            <Route path="search" element = {!verification ? <AgeVerification/> : <Search />}/>
            <Route path="saved" element = {!verification ? <AgeVerification/> : <Saved />}/>
            <Route path="/recipe/:idDrink" element= {!verification ? <AgeVerification/> : <RecipeDetails />} />
            <Route path="library-card" element= {!verification ? <AgeVerification/> : <LibraryCard />} />
        </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
