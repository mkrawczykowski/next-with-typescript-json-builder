import React from 'react';
import style from './list1980.module.scss';
import ListHeader1980 from '../ListHeader1980/ListHeader1980'
import ListItem1980 from '../ListItem1980/ListItem1980'

type Props = {
    item: string;
}

export const addList1980Item(item: string):ReactNode  = ({item}) => {
    return(
        <ListItem1980 data={item}></ListItem1980>
    )
}

const List1980: React.FC<{item: string}> = ({item}) => {
    return(
        <div className={style.list1980}>
            <ListHeader1980></ListHeader1980>
            {addList1980Item(item)}
        </div>
    )
}

export default List1980;