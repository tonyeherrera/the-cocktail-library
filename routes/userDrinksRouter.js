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

//get userDrinks by user Id
userDrinksRouter.get("/user", (req, res, next) => {
    UserDrink.find({user: req.auth._id}, (err, userDrinks) => {
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
    req.body.author = req.auth.username
    const newUserDrink = new UserDrink(req.body)
    newUserDrink.save((err, savedUserDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUserDrink)
    })
})

//delet userDrink
userDrinksRouter.delete('/:userDrinkId', (req, res, next) => {
    UserDrink.findOneAndDelete(
        {_id: req.params.userDrinkId, user: req.auth._id},
        (err, deletedUserDrink) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted userDrink ${deletedUserDrink.strDrink}`)
        }
    )
})

//edit userDrink
userDrinksRouter.put('/:userDrinkId', (req, res, next) => {
    UserDrink.findOneAndUpdate(
        {_id: req.params.userDrinkId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedUserDrink) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUserDrink)
        }
    )
})

module.exports = userDrinksRouter