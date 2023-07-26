import React, {useState} from 'react';
// @ts-ignore
import styles from './Pages.module.scss'
import {getPagesArray} from "../../utils/pages";

interface PagesProps{
    pages:number,
    onClick: (page:number) => void,
    current:number
}

const Pages:React.FC<PagesProps> = ({pages, onClick, current}) => {


    const arrayPages = getPagesArray(Math.ceil(pages / 10))

    return (
        <div className={styles.container}>
            {arrayPages.map((el,index) =>{
                return <span onClick={(e) => {onClick(Number(e.currentTarget.innerHTML))}}
                             className={`${styles.pageNumber} ${current === el ? styles.pageNumber_current : ''}`}
                             key={index}>{el}</span>
            })}
        </div>
    );
};

export default Pages;