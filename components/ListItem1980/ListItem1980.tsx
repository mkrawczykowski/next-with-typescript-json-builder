import React from 'react';
import style from './listItem1980.module.scss';
type Props = {
    data: string;
}

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
            {/* <div className={style.listItem1980__column}>ARG</div>
            <div className={style.listItem1980__column}>{content}</div>
            <div className={style.listItem1980__column}>49</div>
            <div className={style.listItem1980__column}>46</div>
            <div className={style.listItem1980__column}>56</div>
            <div className={style.listItem1980__column}>86</div>
            <div className={style.listItem1980__column}>20</div>
            <div className={style.listItem1980__column}>62</div> */}
            <div className={style.listItem1980__column}><input type="text" className={style.listItem1980__inputText}/></div>
        </div>
    )
}

export default ListItem1980;