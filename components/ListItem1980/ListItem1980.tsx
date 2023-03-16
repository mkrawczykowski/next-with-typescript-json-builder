import React, {useContext} from 'react';
import style from './listItem1980.module.scss';
import {Context} from '../Store/Store';

const ListItem1980 = ({itemShortName, content}) => {
    const columns2015 = Object.values(content[2015]);
    const itemCountryName = content.countryName;
    const RegExpression = /\s/g;

    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);

    const handleInputChange = (e) => {
        let values1980Array = [];
        const inputValue = e.target.value;
        const whichItemShort = e.target.parentNode.parentNode.dataset.itemshortname;
        
        const hasThreeSpaces = (string: string) => {
            if (string.match(RegExpression)){
                if (string.match(RegExpression).length === 3) {
                    return true;
                }
            } else {
                return false;
            }
        }

        if (hasThreeSpaces(inputValue)){
            values1980Array = inputValue.split(' ');
            let all1980ItemsStateNew = all1980ItemsState;
            all1980ItemsStateNew[whichItemShort][1980] = {
                'pdi': values1980Array[0],
                'idv': values1980Array[1],
                'uai': values1980Array[2],
                'mas': values1980Array[3],
            }
            setAll1980ItemsState(all1980ItemsStateNew);
        }
    }

    return(
        <>
            <div className={style.listItem1980} data-itemShortName={itemShortName}>
                <div className={style.listItem1980__column}>{itemShortName}</div>
                <div className={style.listItem1980__column}>{itemCountryName}</div>
                {
                    columns2015.map((column2015, column2015Index) => {
                        return(
                            <div className={style.listItem1980__column} key={column2015Index}>{column2015}</div>
                        )
                    })
                }
                <div className={style.listItem1980__column}><input type="text" className={style.listItem1980__inputText} onChange={handleInputChange} /></div>
            </div>
        </>
    )
}

export default ListItem1980;