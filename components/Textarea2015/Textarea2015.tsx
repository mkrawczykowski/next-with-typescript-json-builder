import React, {useContext, useEffect} from 'react';
import style from './Textarea2015.module.scss';
import {Context} from '../Store/Store';

const handleOnChange = (e, all1980ItemsState, setAll1980ItemsState) => {
    let textareaValue = e.target.value;
    let newAll1980ItemsState = {};

    textareaValue.split(/\n/).map((textareaLine, textareaLineIndex) => {
        if (textareaLine !== ''){
            let lineArray = textareaLine.split(/\t/);
            // console.log(lineArray[0]);
            let shortCountryName = lineArray[0];
            let lineObject = {};
            
            lineObject[2015] = {}
            lineObject[2015]['pdi'] = lineArray[2];
            lineObject[2015]['idv'] = lineArray[3];
            lineObject[2015]['mas'] = lineArray[4];
            lineObject[2015]['uai'] = lineArray[5];
            lineObject[2015]['ltowvs'] = lineArray[6];
            lineObject[2015]['ivr'] = lineArray[7];
            lineObject['countryName'] = lineArray[1];
            // console.log('lineObject');
            // console.log(lineObject);
            newAll1980ItemsState[shortCountryName] = lineObject;
            // console.log('newAll1980ItemsState');
            // console.log(newAll1980ItemsState);
        }
    })
    setAll1980ItemsState(newAll1980ItemsState);
}

const Textarea2015 = () => {
    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);
    useEffect(() => {
        console.log('--=all1980ItemsState=--');
        console.log(all1980ItemsState);
    })

    return(
        <textarea className={style.textarea2015} onChange={(event) => handleOnChange(event, all1980ItemsState, setAll1980ItemsState)}></textarea>
    )
}

export default Textarea2015;

// const test = {
//     "AFE": {
//         name: 'Africa East',
//         2015: {
//             'pdi': 12,
//             'idv': 12,
//             'mas': 12,
//             'uai': 12,
//             'ltowvs': 12,
//             'ivr': 12,
//         },
//         1980: {
//             'pdi': 12,
//             'idv': 12,
//             'mas': 12,
//             'uai': 12,
//         }
//     }
// }