'use client'

import React from 'react';
import Image from "next/image";

import FormSearchDate from "../../../../components/formSerchDate/formSerchDate";
import {useWindowWidth} from "../../../../utils/UseWidth";

import background from '../../../../public/backgroundHotelsPage.webp';

import styles from '../../../styles/firstSectionHotels.module.css';
import stylesFontsT from '../../../styles/fonts/timesNewRoman.module.css';

const FirstSectionHotels = () => {
    const width = useWindowWidth();

    return (
        <section className={styles.main}>
            <Image alt={'background'} src={background}
                   priority={true}
                   className={styles.background}/>
            <h1 className={`${stylesFontsT.newRoman400} ${styles.title}`}>Отдых на черноморском <br/> побережье</h1>
            {width > 768 && <div className={styles.wrapperForm}>
                <FormSearchDate color={'white'}/>
            </div>}
        </section>
    );
};

export default FirstSectionHotels;