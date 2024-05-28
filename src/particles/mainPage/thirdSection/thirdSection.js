'use client'

import React from 'react';

import Image from "next/image";
import Title from "../../../../components/title/title";

import img1 from '../../../../public/hotel3Ter1.svg';
import img2 from '../../../../public/hotel3Ter2.svg';
import img3 from '../../../../public/hotel3Ter3.svg';
import img4 from '../../../../public/hotel3Ter4.svg';
import img5 from '../../../../public/hotel3Ter5.svg';

import styles from "../../../styles/thirdSection.module.css";
import stylesFontsT from "../../../styles/fonts/timesNewRoman.module.css";


const ThirdSection = ({description}) => {

    const list = [
        {id: 2, img: img2, text: 'Бассейн'},
        {id: 3, img: img3, text: 'Детская площадка'},
        {id: 4, img: img4, text: 'Качели'},
        {id: 5, img: img5, text: 'Бесплатная парковка'},
        {id: 1, img: img1, text: 'Мангальные зоны для каждого коттеджа'},
    ];

    return (
        <section className={styles.main}>
            <Title Tag={'h2'} text={'Територия'}/>

            <div className={styles.containerMain}>
                <p className={`${stylesFontsT.newRoman400} ${styles.description}`}>{description}</p>
                <div className={styles.line}/>
                <div className={styles.wrapperList}>
                    {list.map(el => {
                        return <div key={el.id} className={styles.containerList}>
                            <Image alt={'img'} src={el.img} className={styles.img}/>
                            <p className={stylesFontsT.newRoman400}>{el.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;