import React, {useContext} from 'react';
import styles from './TabContent.module.scss';
import {ActiveTabContext} from '../Store/Store';

const TabContent = ({name, children}) => {
    const [activeTabState, setActiveTabState] = useContext(ActiveTabContext);

    let classes: string[] = [styles.tabContent];

    const isActive = (name: string) => {
        return activeTabState === name? 1 : 0;
    }

    const handleOnClick = () => {
        if (!isActive(name)){
            setActiveTabState(name);
        }
    }

    return(
        <div onClick={handleOnClick}className={`${classes.join(' ')} ${activeTabState === name ? styles.active : null}`}>
            {children}
        </div>
    )
}

export default TabContent;