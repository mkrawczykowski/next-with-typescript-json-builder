import React, {useContext, useEffect} from 'react';
import styles from './Tab.module.scss';
import {Context} from '../Store/Store';

const Tab = ({name, children}) => {
    const [activeTabState, setActiveTabState] = useContext(Context);

    // useEffect(()=>{
    //     console.log(activeTabState)
    // })

    let classes: string[] = [styles.tab];

    const isActive = (name: string) => {
        return activeTabState === name? 1 : 0;
    }

    const handleOnClick = () => {
        if (!isActive(name)){
            setActiveTabState(name);
        }
    }

    return(
        <li onClick={handleOnClick} className={`${classes.join(' ')} ${activeTabState === name ? styles.active : null}`}>{children}</li>    
    )
}

export default Tab;