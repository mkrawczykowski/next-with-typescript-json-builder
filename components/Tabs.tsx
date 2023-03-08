import React, {useState, createContext} from 'react';
import Tab from './Tab';
import TabContent from './Tab';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const isActive = (tabNumber: string) => {
        return activeTab === tabNumber? 1 : 0;
    }
    
    return(
        <div className="tabs">
            <ul>
                <Tab active={isActive('tab1')}>2015</Tab>
                <Tab active={isActive('tab2')}>1980</Tab>
                <Tab active={isActive('tab3')}>Final</Tab>    
            </ul>
            <TabContent active={isActive('tab1')}>
                Tab 1 content
            </TabContent>
            <TabContent active={isActive('tab2')}>
                tab 2 content
            </TabContent>
            <TabContent active={isActive('tab3')}>
                Tab 3 content</TabContent>   
        </div>
    )
}

export default Tabs;