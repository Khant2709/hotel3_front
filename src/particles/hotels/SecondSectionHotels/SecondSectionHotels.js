'use client'

import React from 'react';
import Image from "next/image";

import {hotelList} from "../../../../informationData/dataHotels";
import {mainColorHotel, seconderyColorHotel} from "../../../../informationData/styleHotels";

import Button from "../../../../components/button/button";

import styles from "../../../styles/secondSectionHotels.module.css";
import stylesFontsT from '../../../styles/fonts/timesNewRoman.module.css';
import {useWindowWidth} from "../../../../utils/UseWidth";


const SecondSectionHotels = () => {
    const width = useWindowWidth();

    return (
        <section className={styles.main}>
            {hotelList.map((hotel, index) => {
                return <div key={index} className={styles.wrapperHotel}
                            style={{background: `${seconderyColorHotel[hotel.numberHotel]}`}}>
                    <div className={styles.containerHotel}>
                        {width > 768
                            ? index % 2 === 0
                                ? <>
                                    <div className={`${stylesFontsT.newRoman400} ${styles.informationContainerHotel}`}>
                                        <p className={styles.nameHotel}
                                           style={{color: `${mainColorHotel[hotel.numberHotel]}`}}>{hotel.nameHotel}</p>
                                        <p className={styles.descriptionHotel}>{hotel.descriptionHotel}</p>
                                        <div className={styles.wrapperBtn}>
                                            <Button text={'Забронировать'} hotel={hotel.numberHotel}/>
                                            <Button text={'Перейти на отель'} hotel={hotel.numberHotel}/>
                                        </div>
                                    </div>
                                    <Image alt={'img'} src={hotel.imageHotelMain}
                                           style={{marginLeft: '1rem'}}
                                           className={styles.imgHotel}/>
                                </>
                                : <>
                                    <Image alt={'img'} src={hotel.imageHotelMain}
                                           style={{marginRight: '1rem'}}
                                           className={styles.imgHotel}/>
                                    <div className={`${stylesFontsT.newRoman400} ${styles.informationContainerHotel}`}>
                                        <p className={styles.nameHotel}
                                           style={{color: `${mainColorHotel[hotel.numberHotel]}`}}>{hotel.nameHotel}</p>
                                        <p className={styles.descriptionHotel}>{hotel.descriptionHotel}</p>
                                        <div className={styles.wrapperBtn}>
                                            <Button text={'Забронировать'} hotel={hotel.numberHotel}/>
                                            <Button text={'Перейти на отель'} hotel={hotel.numberHotel}/>
                                        </div>
                                    </div>
                                </>
                            : <div className={`${stylesFontsT.newRoman400} ${styles.informationContainerHotel}`}>
                                <p className={styles.nameHotel}
                                   style={{color: `${mainColorHotel[hotel.numberHotel]}`}}>{hotel.nameHotel}</p>
                                <p className={styles.descriptionHotel}>{hotel.descriptionHotel}</p>
                                <Image alt={'img'} src={hotel.imageHotelMain} className={styles.imgHotel}/>
                                <div className={styles.wrapperBtn}>
                                    <Button text={'Забронировать'} hotel={hotel.numberHotel}/>
                                    <Button text={'Перейти на отель'} hotel={hotel.numberHotel}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            })}
        </section>
    );
};

export default SecondSectionHotels;