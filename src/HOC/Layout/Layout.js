import React from 'react';

import Header from '../../Components/Header/Header';

const Layout = props => {
    return (
        <div>
            <Header />
            This is the header
            { props.children }
        </div>


    );
};

export default Layout;