import React, {createContext, useState} from 'react';

const initialTabState = 'tab1';

export const ActiveTabContext = createContext(undefined);

const TabsStore = ({children}) => {
    const [activeTabState, setActiveTabState] = useState(initialTabState);

    return(
        <ActiveTabContext.Provider value={[activeTabState, setActiveTabState]}>{children}</ActiveTabContext.Provider>
    )
}

export default TabsStore;