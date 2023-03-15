import React, {useContext} from 'react';
import style from './list1980.module.scss';
import ListHeader1980 from '../ListHeader1980/ListHeader1980'
import ListItem1980 from '../ListItem1980/ListItem1980'
import {Context} from '../Store/Store';

const List1980: React.FC = () => {
    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);
            
    return(
        <div className={style.list1980}>
            <ListHeader1980></ListHeader1980>
            {
                all1980ItemsState.map((list1980Item: string) => {
                    console.log('list1980Item');
                    console.log(list1980Item);
                    if (list1980Item !== ''){
                        return(
                            <ListItem1980 content={list1980Item}/>    
                        )    
                    }
                })
            }
        </div>
    )
}

export default List1980;