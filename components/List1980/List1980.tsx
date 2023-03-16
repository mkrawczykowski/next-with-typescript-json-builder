import React, {useContext} from 'react';
import style from './list1980.module.scss';
import ListHeader1980 from '../ListHeader1980/ListHeader1980'
import ListItem1980 from '../ListItem1980/ListItem1980'
import {Context} from '../Store/Store';

const List1980: React.FC = () => {
    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);
    let all1980ItemsStateArray = Object.entries(all1980ItemsState);
    console.log(all1980ItemsStateArray);

    return(
        <div className={style.list1980}>
            <ListHeader1980></ListHeader1980>
            {
                
                all1980ItemsStateArray.map((list1980Item) => {
                    console.log('list1980Item');
                    console.log(list1980Item[1]);
                    
                        return(
                            <ListItem1980 key={list1980Item[0]} itemShortName={list1980Item[0]} content={list1980Item[1]}/>    
                        )    
                    
                })
            }
        </div>
    )
}

export default List1980;