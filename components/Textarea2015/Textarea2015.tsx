import React, {useContext} from 'react';
import style from './Textarea2015.module.scss';
import {Context} from '../Store/Store';

const handleOnChange = (e, all1980ItemsState, setAll1980ItemsState) => {
    let textareaValue = e.target.value;
    let newAll1980ItemsState = {};

    textareaValue.split(/\n/).map((textareaLine, textareaLineIndex) => {
        if (textareaLine !== ''){
            let lineArray = textareaLine.split(/\t/);
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
            newAll1980ItemsState[shortCountryName] = lineObject;
        }
    })
    setAll1980ItemsState(newAll1980ItemsState);
}

const Textarea2015 = () => {
    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);
    return(
        <textarea className={style.textarea2015} onChange={(event) => handleOnChange(event, all1980ItemsState, setAll1980ItemsState)}></textarea>
    )
}

export default Textarea2015;