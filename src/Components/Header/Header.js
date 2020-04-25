import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '100px',
    },
    title: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    block: {
        margin: '0 5px'
    },
    link: {
        color: 'white'
    }
}));


const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.menuButton}>
                        <Link
                            style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}
                            to='/'>Excercise Tracker</Link>
                    </Typography>
                    <div className={classes.title}>
                        <Typography className={classes.block} variant="h6">
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                                to='/Excercises'>Excercises</Link>
                        </Typography>
                        <Typography className={classes.block} variant="h6">
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                                to='/Add-Excercises'>Add Excercise</Link>
                        </Typography>
                        <Typography className={classes.block} variant="h6">
                            <Link
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                                to='/Create-User'>Create User</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;