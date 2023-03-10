import React, {useState, useContext} from 'react';
import styles from './Tabs.module.scss';
import Tab from '../Tab/Tab';
import TabContent from '../TabContent/TabContent';
import {ActiveTabContext} from '../Store/Store'

const Tabs = () => {
    
    // const handleOnClick2 = () => {
    //     setActiveTabState('tab2')
    // }
    // const handleOnClick3 = () => {
    //     setActiveTabState('tab3')
    // }

    return(
        <>
            <div className={styles.tabs}>
                <ul>
                    <Tab name="tab1">2015</Tab>
                    <Tab name="tab2">1980</Tab>
                    <Tab name="tab3">Final</Tab>    
                </ul>
                
                <TabContent name="tab1">
                    Tab 1 content
                </TabContent>
                <TabContent name="tab2">
                    Tab 2 content
                </TabContent>
                <TabContent name="tab3">
                    Tab 3 content</TabContent>
            </div>
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