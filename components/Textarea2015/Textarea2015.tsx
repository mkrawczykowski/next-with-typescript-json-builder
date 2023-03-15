import React, {useContext, useEffect} from 'react';
import style from './Textarea2015.module.scss';
import {Context} from '../Store/Store';
import {addList1980Item} from '../List1980/List1980';

const handleOnChange = (e, all1980ItemsState, setAll1980ItemsState) => {
    let textareaValue = e.target.value;
    let textareaLines: string[] = textareaValue.split(/\n/);
    console.log('textareaLines');
    console.log(textareaLines);
    
    textareaLines.forEach((item) => {
        if (item !== ''){
        // console.log('all1980ItemsState');
        // console.log(all1980ItemsState);
        // console.log('textareaLine');
        // console.log(textareaLine);
        setAll1980ItemsState(all1980ItemsState.push(item));
        addList1980Item(item);
            console.log('=================================================')
        }
        
    // console.log('all1980ItemsState 2');
    // console.log(all1980ItemsState);
    })

    // setAll1980ItemsState(all1980ItemsState.push(textareaLines));
    
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