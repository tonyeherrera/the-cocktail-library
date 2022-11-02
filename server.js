const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require('express-jwt')
const path = require("path")
const process = require("process");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
}


process.env.SECRET

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(process.env.MONGOURI, ()=> console.log("Connected to DB"))

app.use('/auth', require(path.join(__dirname,'routes','authRouter.js')))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/userDrinks', require(path.join(__dirname,'routes','userDrinksRouter.js')))


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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
  }
  