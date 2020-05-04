import React, { Component } from 'react';

import axios from 'axios';

import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Spinner from '../../UI/Spinner/Spinner';

import classes from './CreateUser.module.css'

const StyledTextField = styled(TextField)`
    
    .MuiInputBase-input {
        color: white;
        '&hover': {
            border-bottom: 1px solid white
        }
        '&focus': {
            border-bottom: 1px solid white;
        }
    }
    .MuiInputAdornment-positionEnd {
        color: white;
        
    }
    .MuiTypography-colorTextSecondary {
        color: white;
    }
    .MuiInput-underline:after {
        border-bottom: 2px solid red;
    }
    label.Mui-focused {
        color: white;
    }
    label {
        color: white
    }
`;

class CreateUser extends Component {

    state = {
        username: '',
        height: 0,
        weight: 0,
        calorieGoal: 0,
        favouriteExcercise: '',
        loading: false,
        formSuccess: ''
    }

    experiment = e => {
        console.log('linked')
    }

    submitUserHandler = e => {
        this.setState({ loading: true })
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            height: this.state.height,
            weight: this.state.weight,
            calorieGoal: this.state.calorieGoal,
            favouriteExcercise: this.state.favouriteExcercise
        }
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => {
                console.log(res)
                this.setState({
                    loading: false,
                    formSuccess: `New User ${this.state.username} Added!`
                })
                setTimeout(() => this.setState({formSuccess: ''}), 4000)
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    loading: false,
                    formSuccess: 'Sorry there was a problem, please try again'
                })
                setTimeout(() => this.setState({formSuccess: ''}), 4000)
            })
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
                <div style={{ background: 'rgb(37, 37, 37)' }} className={classes.paper}>
                    {this.state.loading ?
                        <div className={classes.spinner}>
                            <Spinner />
                        </div> : this.state.formSuccess ?
                            <div className={classes.formSuccess}>
                                {this.state.formSuccess}
                            </div> : null
                    }
                    <h1 className={classes.head}>Create a User</h1>
                    <form onSubmit={this.submitUserHandler}>
                        <StyledTextField
                            fullWidth
                            onChange={this.changeUsernameHandler}
                            id="standard-basic"
                            label="Username"
                            autoComplete="off"
                            style={{ margin: '5px' }}
                            InputProps={{
                                style: {
                                    color: 'white',
                                }
                            }} />
                        <div className={classes.textBlock}>
                            <StyledTextField
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
                            <StyledTextField
                                onChange={this.changeWeightHandler}
                                style={{ marginLeft: '5px' }}
                                className={classes.textFieldBasic}
                                id="standard-basic"
                                label="Weight"
                                type="number"
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                    style: {
                                        color: 'white'
                                    }
                                }} />
                        </div>
                        <StyledTextField
                            onChange={this.changeCalorieHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            label="Daily Calorie Goal"
                            autoComplete="off"
                            type="number"
                            InputProps={{
                                style: {
                                    color: 'white'
                                }
                            }} />
                        <StyledTextField
                            onChange={this.changeExcerciseHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            autoComplete="off"
                            label="Favourite Excercise"
                            InputProps={{
                                style: {
                                    color: 'white'
                                }
                            }} />
                        <button style={{ display: 'none' }} type="submit" onSubmit={this.submitUserHandler}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default CreateUser;