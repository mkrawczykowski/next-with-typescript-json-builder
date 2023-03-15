import React from 'react';
import style from './listItem1980.module.scss';

const ListItem1980 = ({content}) => {
    return(
        <div className={style.listItem1980}>
            {
                content.split(/\t/).map(( part, partIndex) => {
                    return(
                        <div className={style.listItem1980__column} key={partIndex}>{part}</div>
                    )
                })
            }
            <div className={style.listItem1980__column}><input type="text" className={style.listItem1980__inputText}/></div>
        </div>
    )
}

export default ListItem1980;