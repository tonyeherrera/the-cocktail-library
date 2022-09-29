const express = require("express")
const userDrinksRouter = express.Router()
const UserDrink = require('../models/userDrink.js')

//get all userDrinks
userDrinksRouter.get("/", (req, res, next) => {
    UserDrink.find((err, userDrinks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userDrinks)
    })
})

//post new userDrink
userDrinksRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newUserDrink = new UserDrink(req.body)
    newUserDrink.save((err, savedUserDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUserDrink)
    })
})

module.exports = userDrinksRouter