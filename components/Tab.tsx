import React, {useContext} from 'react';
import {activeTabContext} from './activeTabContext';

const Tab = ({active, children}) => {
    const classes = 'tabItem';
    active? classes + ' active' : null;

    const setActiveTab = () => {
        
    }

    return(
        <li className={classes}>{children}</li>    
    )
}

export default Tab;