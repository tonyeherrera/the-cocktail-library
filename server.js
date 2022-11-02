const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require('express-jwt')




app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(process.env.MONGOURI, ()=> console.log("Connected to DB"))

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/userDrinks', require('./routes/userDrinksRouter.js'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMSG: err.message})
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log('Server is running on local port 9000')
})