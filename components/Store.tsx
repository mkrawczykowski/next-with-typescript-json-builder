import React, {useState, createContext} from 'react';

const initialState = {
    name: 'Michał',
    email: 'mkrawczykowski@gmail.com',
}

export const Context = createContext(undefined);

const Store = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store;