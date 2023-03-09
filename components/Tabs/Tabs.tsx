import React, {useState, useContext} from 'react';
// import Tab from './Tab';
// import TabContent from './Tab';
// import {Context} from './Store';
import {ActiveTabContext} from '../Store/Store'

const Tabs = () => {
    const [activeTabState, setActiveTabState] = useContext(ActiveTabContext);
    const handleOnClick2 = () => {
        setActiveTabState('tab2')
    }
    const handleOnClick3 = () => {
        setActiveTabState('tab3')
    }
    return(
        <>
            <p>test</p>
            <p>{activeTabState}</p>
            <button type="button" onClick={handleOnClick2}>Set 2</button>
            <button type="button" onClick={handleOnClick3}>Set 3</button>
        </>
    )
    // const [state, setState] = useContext(Context)
    // const [activeTab, setActiveTab] = useState('tab1');

    // const isActive = (tabNumber: string) => {
    //     return activeTab === tabNumber? 1 : 0;
    // }

    // const handleClick = () => {
    //     const newState = {
    //         name: 'Piotrek',
    //         email: 'piotr.krawczykowski@gmail.com',
    //     }
    //     setState(newState);
    // }
    
//     return(
//         <>
//             <p>
//                 test
//             </p>
//             <p>Name: {state.name}</p>
//             <p>Name: {state.email}</p>
//             <button onClick={handleClick}>Click me!</button>
//         </>
        
//         // <div className="tabs">
//         //     <ul>
//         //         <Tab active={isActive('tab1')}>2015</Tab>
//         //         <Tab active={isActive('tab2')}>1980</Tab>
//         //         <Tab active={isActive('tab3')}>Final</Tab>    
//         //     </ul>
//         //     <TabContent active={isActive('tab1')}>
//         //         Tab 1 content
//         //     </TabContent>
//         //     <TabContent active={isActive('tab2')}>
//         //         tab 2 content
//         //     </TabContent>
//         //     <TabContent active={isActive('tab3')}>
//         //         Tab 3 content</TabContent>   
//         // </div>
//     )
}

export default Tabs;