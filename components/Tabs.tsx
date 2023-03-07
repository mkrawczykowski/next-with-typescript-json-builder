import React, {createContext} from 'react';
import Tab from './Tab';
import TabContent from './Tab';

const Tabs = () => {
    const activeTabContext = createContext(1);
    
    return(
        <div className="tabs">
            <Tab number={1}>2015</Tab>
            <Tab number={2}>1980</Tab>
            <Tab number={3}>Final</Tab>
            <TabContent number={1}>
                Tab 1 content
            </TabContent>
            <TabContent number={2}>
                tab 2 content
            </TabContent>
            <TabContent number={3}>
                Tab 3 content</TabContent>   
        </div>
    )
}

export default Tabs;