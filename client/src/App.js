import React, {useContext} from "react"
import {Routes, Route} from "react-router-dom"
import {DataContext} from "./context/dataContext"
import {UserContext} from "./context/userContext"
import Home from "./components/Home"
import AgeVerification from "./components/AgeVerification"
import Search from "./components/Search"
import Saved from "./components/Saved"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import RecipeDetails from "./components/RecipeDetails"
import Sorry from "./components/Sorry"
import LibraryCard from "./components/LibraryCard"
import Dashboard from "./components/library-card/Dashboard"
import LibraryCardNav from "./components/library-card/LibraryCardNav"
import PrivateLibrary from "./components/library-card/PrivateLibrary"
import PublicLibrary from "./components/library-card/PublicLibrary"
import SubmissionForm from "./components/library-card/SubmissionForm"
import UserSubmissions from "./components/library-card/UserSubmissions"
import AccountSettings from "./components/library-card/AccountSettings"
// import AgeProtectedRoute from "./AgeProtectedRoute"

function App(props) {

  const {verification} = useContext(DataContext)
  const {token} = useContext(UserContext)

  return (
    <>
        <Nav />
        { token && <LibraryCardNav token={token}/>}
        <div className="content">
        <Routes>
          <Route path="/" element = {!verification ? <AgeVerification/> : <Home />}/>
          <Route path="sorry" element = {<Sorry />}/>
            <Route path="search" element = {!verification ? <AgeVerification/> : <Search />}/>
            <Route path="saved" element = {!verification ? <AgeVerification/> : <Saved />}/>
            <Route path="/recipe/:idDrink" element= {!verification ? <AgeVerification/> : <RecipeDetails />} />
            <Route path="library-card" element= {<LibraryCard />} />
            <Route path="library-card/dashboard" element= {!token ? <LibraryCard /> : <Dashboard />} />
            <Route path="library-card/private-library" element= {!token ? <LibraryCard /> : <PrivateLibrary />} />
            <Route path="library-card/public-library" element= {!token ? <LibraryCard /> : <PublicLibrary />} />
            <Route path="library-card/submission-form" element= {!token ? <LibraryCard /> : <SubmissionForm />} />
            <Route path="library-card/user-submissions" element= {!token ? <LibraryCard /> : <UserSubmissions />} />
            <Route path="library-card/account-settings" element= {!token ? <LibraryCard /> : <AccountSettings />} />
        </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
