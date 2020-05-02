import React, { Component } from 'react';

import axios from 'axios'

import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import classes from './CreateUser.module.css'

// const useStyles = makeStyles((theme) => ({
//     cover_image: {
//         background: "url('/images/create_user.jpg') no-repeat center center fixed",
//         backgroundSize: 'cover',
//         height: '100vh',
//         width: '100vw',
//         position: 'absolute',
//         zIndex: '40'
//     },

//     overlay: {
//         position: 'absolute',
//         height: '100vh',
//         width: '100vw',
//         background: 'black',
//         zIndex: '45',
//         opacity: '75%'
//     },

//     paper: {
//         width: '25%',
//         margin: '15% auto 0 auto',
//         padding: '10px',
//         position: 'relative',
//         zIndex: '50',
//         background: 'gray'
//     }
// })

class CreateUser extends Component {

    state = {
        username: '',
        height: 0,
        weight: 0,
        calorieGoal: 0,
        favouriteExcercise: ''
    }

    submitUserHandler = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            height: this.state.height,
            weight: this.state.weight,
            calorieGoal: this.state.calorieGoal,
            favouriteExcercise: this.state.favouriteExcercise
        }
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    changeUsernameHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    changeWeightHandler = e => {
        this.setState({
            weight: e.target.value
        })
    }

    changeHeightHandler = e => {
        this.setState({
            height: e.target.value
        })
    }

    changeCalorieHandler = e => {
        this.setState({
            calorieGoal: e.target.value
        })
    }

    changeExcerciseHandler = e => {
        this.setState({
            favouriteExcercise: e.target.value
        })
    }

    render() {
        return (
            <div className={classes.cover_image}>
                <div className={classes.overlay}></div>
                <Paper style={{ background: 'rgb(37, 37, 37)' }} className={classes.paper}>
                    <h1 className={classes.head}>Create a User</h1>
                    <form onSubmit={this.submitUserHandler}>
                        <TextField
                            onChange={this.changeUsernameHandler}
                            style={{ margin: '0 5px 5px 5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            label="Username"
                            autoComplete="off" />
                        <div className={classes.textBlock}>
                            <TextField
                                onChange={this.changeHeightHandler}
                                style={{ marginRight: '5px' }}
                                className={classes.textFieldBasic}
                                id="standard-basic"
                                label="Height"
                                type="number"
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                }} />
                            <TextField
                                onChange={this.changeWeightHandler}
                                style={{ marginLeft: '5px' }}
                                className={classes.textFieldBasic}
                                id="standard-basic"
                                label="Weight"
                                type="number"
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                }} />
                        </div>
                        <TextField
                            onChange={this.changeCalorieHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            label="Daily Calorie Goal"
                            autoComplete="off"
                            type="number" />
                        <TextField
                            onChange={this.changeExcerciseHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            autoComplete="off"
                            label="Favourite Excercise" />
                        <button style={{ display: 'none' }}>Submit</button>
                    </form>
                </Paper>
            </div>
        );
    }
};

export default CreateUser;