import React, {useContext, useEffect} from 'react';
import style from './Textarea2015.module.scss';
import {Context} from '../Store/Store';

const handleOnChange = (e, all1980ItemsState, setAll1980ItemsState) => {
    let textareaValue = e.target.value;
    setAll1980ItemsState(textareaValue.split(/\n/)); 
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