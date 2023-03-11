import React from 'react';
import style from './ListHeader1980.module.scss';

const ListHeader1980 = () => {
    return(
        <div className={style.listHeader1980}>
            <div className={style.listHeader1980__column}>Country code</div>
            <div className={style.listHeader1980__column}>Country name</div>
            <div className={style.listHeader1980__column}>Power distance</div>
            <div className={style.listHeader1980__column}>Individualism/ collectivism</div>
            <div className={style.listHeader1980__column}>Uncertainity avoidance</div>
            <div className={style.listHeader1980__column}>Masculinity/ feminity</div>
            <div className={style.listHeader1980__column}>Coś jeszcze</div>
            <div className={style.listHeader1980__column}>i tu jeszcze coś</div>
            <div className={style.listHeader1980__column}></div>
        </div>
    )
}

export default ListHeader1980;

