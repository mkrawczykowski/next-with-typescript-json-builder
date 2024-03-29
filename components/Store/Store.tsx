import React, {createContext, useState} from 'react';

const initialTabState = 'tab1';
const initial1980ItemsState = {};

export const Context = createContext(undefined);

const Store = ({children}) => {
    const [activeTabState, setActiveTabState] = useState(initialTabState);
    const [all1980ItemsState, setAll1980ItemsState] = useState(initial1980ItemsState);
    
    return(
        <Context.Provider value={[activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState]}>{children}</Context.Provider>
    )
}

export default Store;