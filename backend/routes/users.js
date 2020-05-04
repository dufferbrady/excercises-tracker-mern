//add required files
const router = require('express').Router();
let Users = require('../models/users');

//add get requests 
router.route('/').get((req, res) => {
    Users.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//add post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const calorieGoal = Number(req.body.calorieGoal);
    const favouriteExcercise = req.body.favouriteExcercise

    const newUser = new Users({ 
        username ,
        height,
        weight,
        calorieGoal,
        favouriteExcercise
    });
    newUser.save()
        .then(users => res.json(`${newUser}`))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//export modules
module.exports = router 