import React, {useContext, useEffect} from 'react';
import style from './TextareaFinal.module.scss';
import {Context} from '../Store/Store';

const TextareaFinal = () => {
    const [activeTabState, setActiveTabState, all1980ItemsState, setAll1980ItemsState] = useContext(Context);

    return(
        <textarea value={JSON.stringify(all1980ItemsState, undefined, 2)} className={style.textareaFinal}></textarea>
    )
}

export default TextareaFinal;