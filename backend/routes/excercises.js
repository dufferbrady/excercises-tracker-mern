// add required files
const router = require('express').Router();
let Excercise = require('../models/excercises');

//add get requests 
router.route('/').get((req, res) => {
    Excercise.find()
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).res.json(`Error: ${err}`))
})

//add post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date
    })

    newExcercise.save()
        .then(excercise => res.json('Excercise Saved'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//export modules
module.exports = router
