import React from 'react';
import Image from "next/image";

import FormCall from "../../../../components/formCall/formCall";
import FormSearchDate from "../../../../components/formSerchDate/formSerchDate";

import iconDown from '../../../../public/iconDown.png';

import styles from '../../../styles/firstSection.module.css';
import stylesFontsT from '../../../styles/fonts/timesNewRoman.module.css';


const FirstSection = ({nameHotel, numberHotel}) => {

    return (
        <section className={styles.main}>
            <div className={styles.background}/>
            <div className={styles.wrapperHotels}>
                <h1 className={`${stylesFontsT.newRoman400} ${styles.title}`}>
                    База отдыха<br/>
                    <span className={styles.title2}>{nameHotel}</span>
                </h1>
                <div className={styles.wrapperFormCall}>
                    <FormCall text={'Забронировать'} numberHotel={numberHotel}/>
                </div>
                <div className={styles.wrapperFormSearch}>
                    <FormSearchDate color={'white'}/>
                </div>
            </div>
            <Image alt={'down'} src={iconDown} className={styles.iconDown}/>
        </section>
    );
};

export default FirstSection;