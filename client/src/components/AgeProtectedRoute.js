import React from 'react'
import {Navigate} from 'react-router-dom'

function AgeProtectedRoute(props){
    const {verification, redirectTo, children} = props
    return verification ? children : <Navigate to ={redirectTo} />}

export default AgeProtectedRoute