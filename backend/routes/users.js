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

    const newUser = new Users({ username });
    newUser.save()
        .then(users => res.json(`New User Added!`))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

//export modules
module.exports = router 