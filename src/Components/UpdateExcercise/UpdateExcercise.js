import React, { Component } from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Spinner from '../../UI/Spinner/Spinner';

import classes from './UpdateExcercise.module.css'

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

class UpdateExcercise extends Component {

    state = {
        excercise: '',
        duration: 0,
        user: '',
        userList: '',
        loading: false,
        formSuccess: ''
    }

    componentDidMount() {
        const EXCERCISE_ID = this.props.match.params.id;
        axios.get(`http://localhost:5000/excercises`)
            .then(res => {
                let userList = []
                res.data.map(user => {
                    userList.push(user.username)
                })
                this.setState({
                    userList,
                })
                axios.get(`http://localhost:5000/excercises/${EXCERCISE_ID}`)
                    .then(res => {
                        this.setState({
                            excercise: res.data.description,
                            duration: res.data.duration,
                            user: res.data.username
                        })
                    })
            })
            .catch(err => console.log(err))
    }

    changeExcerciseHandler = e => {
        this.setState({
            excercise: e.target.value
        })
    }

    changeDurationHandler = e => {
        this.setState({
            duration: e.target.value
        })
    }

    changeUserHandler = e => {
        this.setState({
            user: e.target.value
        })
    }

    submitExcerciseHandler = e => {
        e.preventDefault()
        const EXCERCISE_ID = this.props.match.params.id;
        this.setState({ loading: true })
        const newExcercise = {
            description: this.state.excercise,
            duration: this.state.duration,
            username: this.state.user
        }

        axios.post(`http://localhost:5000/excercises/update/${EXCERCISE_ID}`, newExcercise)
            .then(res => {
                this.setState({
                    loading: false,
                    formSuccess: `Excercise has been updated`
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

    render() {
        let users = []
        if(this.state.userList) {
            this.state.userList.map(user => {
                users.push(user)
            })
        } else {
            return null
        }
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
                    <h1 className={classes.head}>Update Excercise</h1>
                    <form onSubmit={this.submitExcerciseHandler}>
                        <StyledTextField
                            fullWidth
                            onChange={this.changeExcerciseHandler}
                            id="standard-basic"
                            label="Excercise"
                            autoComplete="off"
                            value={this.state.excercise}
                            style={{ margin: '5px' }}
                            InputProps={{
                                style: {
                                    color: 'white',
                                }
                            }} />
                        <StyledTextField
                            fullWidth
                            onChange={this.changeDurationHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            label="Duration "
                            autoComplete="off"
                            value={this.state.duration}
                            type="number"
                            InputProps={{
                                style: {
                                    color: 'white'
                                }
                            }} />
                        <StyledTextField
                            fullWidth
                            select
                            onChange={this.changeUserHandler}
                            style={{ margin: '5px' }}
                            className={classes.textFieldBasic}
                            id="standard-basic"
                            autoComplete="off"
                            value={this.state.user}
                            label="User"
                            value={this.state.user}
                            InputProps={{
                                style: {
                                    color: 'white'
                                }
                            }}>
                            {
                                users.map((user, i) => (
                                    <MenuItem key={i} value={user}>
                                        {user}
                                    </MenuItem>
                                ))
                            }
                            </StyledTextField>
                        <button style={{ display: 'none' }} type="submit" onSubmit={this.submitExcerciseHandler}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateExcercise;