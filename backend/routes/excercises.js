// add required files
const router = require('express').Router();
let Excercise = require('../models/excercises');

//add get requests 
router.route('/').get((req, res) => {
    Excercise.find()
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).res.json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
    Excercise.findById(req.params.id)
        .then(excercise => res.json(excercise))
        .catch(err => res.status(400).json(`Error: ${err}`)) 
})

//add post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = new Date();

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

router.route('/update/:id').post((req, res) => {
    console.log(req.params.id)
    Excercise.findById(req.params.id)
        .then(excercise => {
            excercise.username = req.body.username,
            excercise.description = req.body.description,
            excercise.duration = Number(req.body.duration),
            excercise.date = Date.parse(req.body.date)

            excercise.save()
                .then(excercise => res.json(`Excercise ${req.params.id} has been updated succesfully`))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//Add delete requests
router.route('/:id').delete((req, res) => {
    Excercise.findByIdAndDelete(req.params.id)
        .then(excercise => res.json(`Excercise ${req.body.description} by ${req.body.username} has been deleted`))
        .catch(err => res.status(400).json(`Error: ${err}`)) 
})

//export modules
module.exports = router
