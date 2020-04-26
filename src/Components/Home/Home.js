import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-regular-svg-icons'

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.cover_image}>
        <div className={classes.overlay}></div>
            <div className={classes.main_content}>
                <FontAwesomeIcon
                    className={classes.home_icon}
                    icon={faHandRock} />
                <div className={classes.main_text}>E-Fit</div>
                <div className={classes.sec_text}>Elite Fitness</div>
            </div>
        </div>
    );
};

export default Home;