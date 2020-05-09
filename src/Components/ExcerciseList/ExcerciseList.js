import React, { Component } from 'react';

import { dateConvertor } from '../../misc/helpers';

import axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

import classes from './ExcerciseList.module.css';


class ExcerciseList extends Component {

    state = {
        excerciseList: ''
    }


    componentDidMount() {
        axios.get('http://localhost:5000/excercises')
            .then(res => {
                res.data.map(excercise => {
                    const newDate = dateConvertor(excercise.date);
                    console.log(newDate);
                    excercise.date = newDate;
                })
                this.setState({
                    excerciseList: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className={classes.cover_image}>
                <div className={classes.overlay}></div>
                <TableContainer component={Paper} className={classes.container}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.style}>Excercise</TableCell>
                                <TableCell className={classes.style}>Duration (mins)</TableCell>
                                <TableCell className={classes.style}>Date</TableCell>
                                <TableCell className={classes.style}>User</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.excerciseList ?
                                    this.state.excerciseList.map(row => (
                                        <TableRow className={classes.row} key={row._id}>
                                            <TableCell className={classes.style} align="left">{row.description}</TableCell>
                                            <TableCell className={classes.style} align="left">{row.duration}</TableCell>
                                            <TableCell className={classes.style} align="left">{row.date}</TableCell>
                                            <TableCell className={classes.style} align="left">{row.username}</TableCell>
                                            <TableCell>
                                                <Button className={classes.styledButton} variant="outlined">Edit</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : null
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default ExcerciseList;