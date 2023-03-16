import React from 'react';
import style from './listItem1980.module.scss';

const ListItem1980 = ({content}) => {
    console.log('.keys()');
    const itemShortName = Object.keys(content);
    const itemData = Object.values(content);
    const columns2015 = Object.values(itemData[0][2015]);
    const itemCountryName = itemData[0]['countryName'];
    return(
        <>
            <div className={style.listItem1980}>
                <div className={style.listItem1980__column}>{itemShortName}</div>
                <div className={style.listItem1980__column}>{itemCountryName}</div>
                {
                    columns2015.map((column2015, column2015Index) => {
                        return(
                            <div className={style.listItem1980__column} key={column2015Index}>{column2015}</div>
                        )
                    })
                }
                <div className={style.listItem1980__column}><input type="text" className={style.listItem1980__inputText}/></div>
            </div>
        </>
    )
}

export default ListItem1980;